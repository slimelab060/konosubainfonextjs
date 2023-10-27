import { format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { SideMenu } from '@/components/sidemenu';
import { Toc } from '@/components/toc';
import { allPosts } from 'contentlayer/generated';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) return;
  return { title: post.title };
};

const mdxComponents = {
  Toc,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) notFound();
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="min-h-screen dark:bg-slate-800 lg:bg-slate-200 lg:dark:bg-slate-900">
      <div className="container mx-auto  max-w-7xl flex-1 lg:grid lg:auto-cols-[200px_1fr] lg:grid-flow-col lg:gap-x-4">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div className="toc-content bg-white p-4 dark:bg-slate-800 lg:my-4 lg:min-h-screen lg:rounded-lg lg:shadow-sm">
          <div className="mb-8 text-center">
            <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
              {format(parseISO(post.date), 'yyyy-MM-dd')}
            </time>
            <h1 className="text-3xl font-bold">{post.title}</h1>
          </div>
          <MDXContent components={mdxComponents} />
        </div>
        <aside>
          <Toc />
        </aside>
      </div>
    </article>
  );
};

export default PostLayout;
