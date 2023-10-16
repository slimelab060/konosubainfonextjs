import { compareDesc } from 'date-fns';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { allCharacters, Character } from 'contentlayer/generated';

function CharacterCard(post: Character) {
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
        <CardContent>{'＞︿＜'}</CardContent>
        <CardFooter>
          <Link className={badgeVariants({ variant: 'outline' })} href={''}>
            {post.tags}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Home() {
  const posts = allCharacters.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <>
      {' '}
      <h1 className="mt-8 text-2xl font-black">コンテンツテスト</h1>
      <div className="my-4 grid flex-1 gap-4 text-center text-2xl md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post, idx) => (
          <CharacterCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
