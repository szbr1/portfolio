"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <img src={session.user?.image ?? ""} alt="profile" className="w-16 h-16 rounded-full" />
          <button onClick={() => signOut()} className="px-4 py-2 bg-red-500 text-white rounded">
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn("google")} className="px-4 py-2 bg-blue-500 text-white rounded">
            Sign In with Google
          </button>

          <button onClick={() => signIn("github")} className="px-4 py-2 m-5 bg-green-500 text-white rounded">
            Sign In with Github
          </button>
        </>
      )}
    </main>
  )
}
