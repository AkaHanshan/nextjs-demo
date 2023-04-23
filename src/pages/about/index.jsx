import { useSession } from 'next-auth/react'

function About() {
  const { data: session, status } = useSession()

  return (
    <div>
      <h1>About</h1>
      <p>Session: {JSON.stringify(session)}</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default About