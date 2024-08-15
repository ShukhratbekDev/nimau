import { formatRelative } from 'date-fns';
import { uz } from 'date-fns/locale';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Control } from '@/app/docs/[...slug]/page.client';
import { blog } from '@/app/source';
import { getInitials } from '@/utils/avatar';
import { createMetadata } from '@/utils/metadata';

interface Param {
  slug: string;
}

export default function Page({ params }: { params: Param }): React.ReactElement {
  const page = blog.getPage([params.slug]);

  if (!page) {
    notFound();
  }

  const lastUpdatedDate = page?.data?.updatedAt ?? page?.data?.createdAt;
  const formattedDate = lastUpdatedDate
    ? formatRelative(new Date(lastUpdatedDate), new Date(), { locale: uz })
    : undefined;

  return (
    <>
      <div className="container rounded-xl border py-12 md:px-8 relative">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-8 text-sm text-fd-muted-foreground">{page.data.description}</p>
        {(page?.data?.authors ?? []).map((author) => (
          <div className="flex items-center gap-4">
            {author?.avatar ? (
              <img className="w-10 h-10 rounded-full" src={author.avatar} alt={author.name} />
            ) : (
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{getInitials(author.name)}</span>
              </div>
            )}
            <div className="font-medium dark:text-white">
              <a
                href={author?.telegram ?? '#'}
                rel="author"
                className="text-base font-bold text-gray-900 dark:text-white no-underline"
              >
                {author.name}
              </a>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <time dateTime={lastUpdatedDate as string} title={formattedDate}>
                  {formattedDate}
                </time>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute right-5 top-5">
          <Control url={page.url} />
        </div>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8">
        <article>
          <div className="prose p-4">
            <page.data.exports.default />
          </div>
        </article>
      </article>
    </>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = blog.getPage([params.slug]);

  if (!page) {
    notFound();
  }

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? 'The library for building documentation sites',
  });
}

export function generateStaticParams(): Param[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
