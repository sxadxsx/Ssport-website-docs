import NextAuth from 'next-auth'
import Providers from `next-auth/providers/Google`

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  debug: false
}

export default (req, res) => NextAuth(req, res, options)
