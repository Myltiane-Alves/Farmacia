import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    session({ session, token, user }) {
      return session
    }
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  // database: process.env.MONGODB_URI,
  secret: process.env.JWT_SECRET,
})

