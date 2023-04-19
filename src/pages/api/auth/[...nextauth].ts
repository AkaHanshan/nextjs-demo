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
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: false,
        sameSite: "lax",
        path: "/",
        domain: ".next-auth-example.vercel.app",
        secure: useSecureCookies,
      },
    },
  },
});
