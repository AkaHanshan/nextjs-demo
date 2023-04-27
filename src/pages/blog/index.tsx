import { useSession } from "next-auth/react";

interface BlogProps {
  content: string;
}

function Blog(context: BlogProps) {
  const { data: session, status } = useSession();
  return (
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
                  {context.content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-400">
                <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                  {`Hello the next line is render in client side`}
                </p>
                <p className="text-lg leading-7 font-semibold text-gray-900 dark:text-gray-100">
                  {
                    status === 'authenticated' ? `Welcome ${session?.user?.name}` : 'Please login'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

async function fetchMarkdownContent(repoOwner: string, repoName: string, filePath: string) {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${repoOwner}/${repoName}/master/${filePath}`
    );
    console.log('url', `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${filePath}`)

    if (!response.ok) {
      throw new Error(`Error fetching file: ${response.statusText}`);
    }

    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error:", error);
  }
}


// get pagenation posts
export async function getServerSideProps() {
  const content = await fetchMarkdownContent(
    "AkaHanshan",
    "AkaHanshan",
    "README.md"
  );
  console.log("content:", content);

  return {
    props: {
      content: content || ""
    }
  }
}
export default Blog