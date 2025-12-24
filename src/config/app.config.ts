// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api/users',
  TIMEOUT: 30000,
};

// Remote Configuration
export const REMOTE_CONFIG = {
  CUSTOM_MAIN: process.env.REMOTE_CUSTOM_MAIN_URL || 'http://localhost:5000/remoteEntry.js',
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'User Management',
  VERSION: '1.0.0',
  ENVIRONMENT: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.REMOTE_PORT || '5001'),
};
