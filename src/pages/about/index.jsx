import { useSession } from 'next-auth/react'

function About() {
  const { data: session = {}, status ='unauthenticated' } = useSession()
  return (
    // about page design by tailwindcss
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold text-blue-600">About</h1>
      <p className="mt-3 text-2xl text-gray-600">This is about page</p>
      <p className="mt-3 text-2xl text-gray-600">Session status: {status}</p>
      <p className="mt-3 text-2xl text-gray-600">Session data: {JSON.stringify(session)}</p>
    </div>
  )
}

export default About