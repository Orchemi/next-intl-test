import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const page = async () => {
  const t = await getTranslations('DynamicValue');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t('title', { name: 'John' })}</h1>
      <div>
        <h2 className="text-xl font-bold">
          <Link href="https://next-intl.dev/docs/usage/messages#cardinal-pluralization">
            Cardinal pluralization
          </Link>
        </h2>
        <p>{t('followers', { count: 0 })}</p>
        <p>{t('followers', { count: 1 })}</p>
        <p>{t('followers', { count: 2 })}</p>
        <p>{t('followers', { count: 2000 })}</p>
      </div>
    </div>
  );
};

export default page;
