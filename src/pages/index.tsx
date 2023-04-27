export default function Home() {
  return (
    <>
      <main className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Blog
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-400">
                  <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    {`Hello`}
                  </p>
                  <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    {`I'm a software engineer, I'm interested in web development, cloud computing, and distributed systems.`}
                  </p>
                  <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    {`I'm currently working at Prudential.`}
                  </p>
                  <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                    {`I'm currently learning React.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
