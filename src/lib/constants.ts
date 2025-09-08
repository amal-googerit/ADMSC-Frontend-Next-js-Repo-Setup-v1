/**
 * Application constants
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.admsc.com';

export const APP_CONFIG = {
  name: 'ADMSC Client Dashboard',
  version: '1.0.0',
  description: 'Advanced management system client dashboard',
} as const;

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;
