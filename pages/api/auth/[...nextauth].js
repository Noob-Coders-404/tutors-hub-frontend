import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {

  providers: [
    CredentialsProvider({
      type: "credentials",
      name:'Login',
      credentials: {
        email: {
          type: 'email',
        },
        password: { type: 'password' }
      },
      async authorize(credentials) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        const res = await fetch('http://127.0.0.1:5000/api/v1/auth/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const user = await res.json();
        if (!res.ok) {
          throw new Error(user.message);
        }
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  jwt:{
    secret: 'fgsdjgkpt[jupl[pjkydgofsdjdfhjghguwer',
  },
 
  session:{
    jwt:true,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;

      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  
};
export default NextAuth(authOptions);
