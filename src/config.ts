export const config = {
  api_base_url: process.env.NEXT_MODE === 'dev' ? 'http://localhost:1337' : '/api',
  // auth_base_url: process.env.NEXT_MODE !== 'dev' ? '/auth' : '/auth',
  // token: process.env.access_token,
};


export default config;
