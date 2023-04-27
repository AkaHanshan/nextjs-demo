import { useSession,getSession } from 'next-auth/react'
import { useState, useEffect} from 'react'
function About() {
  const { data, status = 'unauthenticated' } = useSession();
  const [repositories, setRepositories] = useState([]);
  const accessToken = data?.accessToken;

  console.log('data', data)

  useEffect(() => {
    if (!accessToken) return;
    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then(setRepositories);
  }, [accessToken]);


  return (
    // about page design by tailwindcss
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold text-blue-600">About</h1>
      <p className="mt-3 text-2xl text-gray-600">This is about page</p>
      <p className="mt-3 text-2xl text-gray-600">Session status: {status}</p>
      {/* <p className="mt-3 text-2xl text-gray-600">Session data: {JSON.stringify(session)}</p> */}
      <ul>
        Access token: {accessToken}
      </ul>
    </div>
  )
}

export default About