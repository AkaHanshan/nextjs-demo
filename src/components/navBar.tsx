import Link from 'next/link';
import ThemeSwitchButton from './themeSwitchButton';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Navbar() {
  const { data, status } = useSession();
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center filter dark:invert">
            <Link href="/">
              <Image
                src="next.svg"
                alt="next.js"
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className="flex items-center ml-4">
            <Link href="/blog">
              <span className="px-3 py-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Blog</span>
            </Link>
            <Link href="/tags">
              <span className="px-3 py-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Tags</span>
            </Link>
            <Link href="/project">
              <span className="px-3 py-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">Project</span>
            </Link>
            <Link href="/about">
              <span className="px-3 py-2 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">About</span>
            </Link>
          </div>
          <div className="flex items-center">

            <div className="ml-4 flex items-center md:ml-6">
              <ThemeSwitchButton />
            </div>
            <div className="ml-4 flex items-center md:ml-6 dark:invert cursor-pointer">
              <Image
                src="github.svg"
                alt="github"
                width={28}
                height={28}
                onClick={() => signIn('github')}
              />
            </div>
            {status === 'authenticated' && (
              <div className="ml-4 flex items-center md:ml-6 dark:invert">
                <Image
                  src={data?.user?.image || ''}
                  alt="avatar"
                  width={28}
                  height={28}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}