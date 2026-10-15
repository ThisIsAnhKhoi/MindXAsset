/**
 * Centralized API configuration for MindXAsset Frontend
 * Resolves API Base URL dynamically:
 * 1. Build-time / Runtime environment variable: import.meta.env.VITE_API_BASE_URL
 * 2. If running locally (localhost / 127.0.0.1) -> http://localhost:5000
 * 3. If running deployed on Cloud (Vercel / Production) -> https://mindxasset.onrender.com
 */

export const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/+$/, '');
  }
  
  if (
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ) {
    return 'http://localhost:5000';
  }
  
  return 'https://mindxasset.onrender.com';
};

export const API_BASE_URL = getApiBaseUrl();
