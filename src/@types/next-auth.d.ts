import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }
}

/** Sobrescrever a tipagem do next-auth que tem dentro de node_modules */