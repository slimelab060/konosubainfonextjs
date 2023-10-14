import { compareDesc, format, parseISO } from 'date-fns';
import split from 'just-split';
import Link from 'next/link';
import { Pagination } from '@/components/pagination';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { allPosts, Post } from 'contentlayer/generated';

const getCorrectPage = ({ page, max }: { page: string | number | undefined; max: number }) => {
  let _page = Number(page);
  if (page === undefined || !Number.isInteger(_page) || _page > max || _page <= 0) {
    return 1;
  } else {
    return _page;
  }
};

interface PageProps {
  searchParams: { page: number };
}

const PER_PAGE = 10;

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className="mb-1 text-xl">
              <Link href={post.url} className="text-foreground hover:text-blue-900 dark:text-foreground">
                {post.title}
              </Link>
            </h2>
          </CardTitle>
          <CardDescription>
            {' '}
            <div
              className="line-clamp-3 text-sm [&>*:last-child]:mb-0 [&>*]:mb-3"
              dangerouslySetInnerHTML={{ __html: post.body.raw }}
            />
          </CardDescription>
        </CardHeader>
        <CardContent>W___W</CardContent>
        <CardFooter>
          {' '}
          <time dateTime={post.date} className="mb-2 block text-sm text-gray-600">
            {format(parseISO(post.date), 'yyyy-MM-dd')}
          </time>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Home({ searchParams }: PageProps) {
  const sorts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const splits = split(sorts, PER_PAGE);
  let { page } = searchParams;
  page = getCorrectPage({ page, max: splits.length });
  console.log(page);
  const posts = splits[page - 1];
  const initialDisplayPosts = posts.slice(0, PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / PER_PAGE),
  };
  return (
    <>
      {' '}
      <h1 className="mt-8 text-2xl font-black">コンテンツテスト</h1>
      <div className="my-4 grid flex-1 gap-4 text-center text-2xl md:grid-cols-2 lg:grid-cols-4">
        {posts
          .filter((post) => post.draft === false)
          .map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
      </div>
      <div>{splits.length > 1 ? <Pagination href="/other" max={splits.length} page={page} /> : ''}</div>
    </>
  );
}
