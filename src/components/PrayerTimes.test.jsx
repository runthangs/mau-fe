import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import PrayerTimes from './PrayerTimes';

// Mock fetch globally
global.fetch = vi.fn();

describe('PrayerTimes', () => {
  beforeEach(() => {
    // Use fake timers to control Date and setInterval
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-01-01T12:00:00'));
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('shows loading state initially', async () => {
    // Mock fetch to never resolve immediately to test loading state
    fetch.mockImplementationOnce(() => new Promise(() => {}));

    render(<PrayerTimes />);
    // Since the promise never resolves, it should stay in loading state
    expect(screen.getByText('Loading prayer times...')).toBeInTheDocument();
  });

  it('renders prayer times on successful fetch', async () => {
    const mockData = {
      data: {
        timings: {
          Fajr: '06:30',
          Dhuhr: '13:00',
          Asr: '15:15',
          Maghrib: '17:45',
          Isha: '19:30',
          Sunrise: '08:00',
          Sunset: '17:45',
          Midnight: '00:00'
        }
      }
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    render(<PrayerTimes />);

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Prayer Times')).toBeInTheDocument();
    });

    // Check if prayer times are displayed
    expect(screen.getByText('Fajr')).toBeInTheDocument();
    expect(screen.getByText('06:30')).toBeInTheDocument();
    expect(screen.getByText('Isha')).toBeInTheDocument();
    expect(screen.getByText('19:30')).toBeInTheDocument();

    // Check Jumu'ah static time
    expect(screen.getByText("Jumu'ah")).toBeInTheDocument();
    expect(screen.getByText('1:15 PM')).toBeInTheDocument();

    // Check date display - depends on our mocked system time
    // 2025-01-01 is a Wednesday
    expect(screen.getByText(/Wednesday, 1 January/)).toBeInTheDocument();
  });

  it('shows error message on fetch failure (network error)', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<PrayerTimes />);

    await waitFor(() => {
      expect(screen.getByText('Unable to load prayer times')).toBeInTheDocument();
    });
  });

  it('shows error message on API error (non-200 response)', async () => {
    fetch.mockResolvedValueOnce({
      ok: false
    });

    render(<PrayerTimes />);

    await waitFor(() => {
      expect(screen.getByText('Unable to load prayer times')).toBeInTheDocument();
    });
  });
});
