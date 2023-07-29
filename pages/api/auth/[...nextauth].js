import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
   GoogleProvider({
      clientId: process.env.Google_ID,
      clientSecret: process.env.Google_SECRET,
    }),  ],
return await NextAuth(req, res, {
providers,
secret: process.env.SECRET,
jwt: {
secret: process.env.SECRET,
},
session: {
// This is the default. The session is saved in a cookie and never persisted anywhere.
strategy: "jwt",
},
// Enable debug messages in the console if you are having problems
debug: true,

pages: {
signIn: "/auth/signin",
error: "/auth/signin",
newUser: "/auth/new-user",
},

callbacks: {
async session({ session, token }) {
// Send properties to the client, like an access_token from a provider.
session.accessToken = token.accessToken;
session.refreshToken = token.refreshToken;
session.idToken = token.idToken;
session.provider = token.provider;
session.id = token.id;
return session;
},
async jwt({ token, user, account }) {
// Persist the OAuth access_token to the token right after signin
if (account) {
token.accessToken = account.access_token;
token.refreshToken = account.refresh_token;
token.idToken = account.id_token;
token.provider = account.provider;
}
if (user) {
token.id = user.id.toString();
}
return token;
    },
  },
}



export default NextAuth(authOptions)
