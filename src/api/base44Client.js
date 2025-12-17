import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "6942d82489e40d47754bcee1", 
  requiresAuth: true // Ensure authentication is required for all operations
});
