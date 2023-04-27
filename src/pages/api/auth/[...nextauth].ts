import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { DefaultSession } from "next-auth";

interface SessionExtension extends DefaultSession {
  accessToken: string;
  refreshToken: string;
}

export interface GithubEmail extends Record<string, any> {
  email: string;
  primary: boolean;
  verified: boolean;
  visibility: "public" | "private";
}

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        url: "https://github.com/login/oauth/authorize",
        params: { scope: "read:user user:email repo" },
      },
    }),
  ],
  secret: process.env.SECRET as string,
  callbacks: {
    async jwt({ token }) {
      token.useRole = "admin";
      return token;
    },
    //add interface SessionExtension to DefaultSession for async session
    async session({ session, token }) {
      (session as SessionExtension).accessToken = token.accessToken as string;
      (session as SessionExtension).refreshToken = token.refreshToken as string;
      return session;
    },
  },
});
