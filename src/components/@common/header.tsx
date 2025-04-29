'use client';

import { Link, usePathname, useRouter } from '@/i18n/navigation';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="h-16 w-screen" />
      <header className="fixed top-0 left-0 flex h-16 w-screen items-center justify-between border-b border-gray-200 px-10">
        <div className="flex items-center space-x-6">
          <button onClick={() => router.replace(pathname, { locale: 'ko' })}>
            ko
          </button>
          <button onClick={() => router.replace(pathname, { locale: 'en' })}>
            en
          </button>
        </div>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/dynamic-value">Dynamic Value</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
