import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const useSecureCookies = !!process.env.VERCEL_URL;

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.SECRET as string,
});
