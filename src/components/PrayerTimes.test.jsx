import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import PrayerTimes from './PrayerTimes';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('PrayerTimes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows loading state initially', async () => {
    // Mock fetch to never resolve immediately to test loading state
    mockFetch.mockImplementationOnce(() => new Promise(() => {}));

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

    mockFetch.mockResolvedValueOnce({
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

    // Check Watford location badge
    expect(screen.getByText('Watford')).toBeInTheDocument();
  });

  it('shows error message on fetch failure (network error)', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    render(<PrayerTimes />);

    await waitFor(() => {
      expect(screen.getByText('Unable to load prayer times')).toBeInTheDocument();
    });
  });

  it('shows error message on API error (non-200 response)', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false
    });

    render(<PrayerTimes />);

    await waitFor(() => {
      expect(screen.getByText('Unable to load prayer times')).toBeInTheDocument();
    });
  });
});
