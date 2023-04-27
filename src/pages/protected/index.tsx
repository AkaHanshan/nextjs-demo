import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (status === 'unauthenticated') {
    return <>
      <main className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Access Denied
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-400">
                  <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    {`You are not logged in`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  } else {
    return (
      <main className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Protected Page
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-400">
                  <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    {JSON.stringify(session, null, 2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}