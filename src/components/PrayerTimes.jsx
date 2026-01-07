import React, { useState, useEffect } from 'react';

const PrayerTimes = () => {
  const [prayers, setPrayers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PRAYER_NAMES = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const date = new Date();
        const timestamp = Math.floor(date.getTime() / 1000);
        // Watford Coordinates
        const lat = 51.6565;
        const lng = -0.3903;

        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${lat}&longitude=${lng}&method=2&school=1`
        );

        if (!response.ok) throw new Error('Failed to fetch prayer times');

        const data = await response.json();
        const timings = data.data.timings;

        setPrayers(timings);
        setLoading(false);
      } catch (err) {
        setError('Unable to load prayer times');
        setLoading(false);
      }
    };

    fetchPrayerTimes();
    const interval = setInterval(fetchPrayerTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="p-6 text-center text-gray-500">Loading prayer times...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="bg-primary px-6 py-4">
        <h3 className="text-white text-lg font-bold flex items-center justify-between">
          <span>Prayer Times</span>
          <span className="text-xs font-normal bg-white/20 px-2 py-1 rounded">Watford</span>
        </h3>
        <p className="text-primary-50 text-xs mt-1">
          {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {PRAYER_NAMES.map((name) => (
          <div key={name} className="flex justify-between items-center px-6 py-3 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-text">{name}</span>
            <span className="font-bold text-primary">{prayers[name]}</span>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-gray-50 text-center">
        <a href="/prayer-times" className="text-xs text-gray-500 hover:text-primary underline">
          View full timetable
        </a>
      </div>
    </div>
  );
};

export default PrayerTimes;
