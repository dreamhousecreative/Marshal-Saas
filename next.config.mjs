/** @type {import('next').NextConfig} */
const nextConfig = {

  serverRuntimeConfig: {
    public: {
      kinde: {
        clientId: process.env.KINDE_CLIENT_ID,
        clientSecret: process.env.KINDE_CLIENT_SECRET,
        domain: 'casechats-ai-phi.vercel.app'  
      }
    }
  }

}

export default nextConfig

  