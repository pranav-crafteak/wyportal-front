import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own logic here to validate credentials
        // This is just a placeholder
        if (credentials.username === "user" && credentials.password === "password") {
          return { id: 1, name: "Test User", email: "test@example.com" }
        } else {
          return null
        }
      }
    })
  ],
  // Add other NextAuth.js options as needed
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }