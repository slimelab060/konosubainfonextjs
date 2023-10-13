import { compareDesc, format, parseISO } from 'date-fns';
import split from 'just-split';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import CharacterCard from '@/app/(character)/character/page';
import { TestSpreadOperator } from '@/components/TestSpreadOperator';
import { Testcolorvar } from '@/components/Testcolorvar';
import EmblaCarousel from '@/components/carousel';
import CountDownTimer from '@/components/countdowntimer';
import { Pagination } from '@/components/pagination';
import { SideMenu } from '@/components/sidemenu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MultiSelect } from '@/components/ui/multi-select';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { characterlist, characterkorabolist, elementlist } from '@/data/selectlist';

import { allPosts, Post } from 'contentlayer/generated';

//<Image className="object-fill" src={test} alt="background-image" />
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
  const posts = splits[page - 1];
  const initialDisplayPosts = posts.slice(0, PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / PER_PAGE),
  };

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-900">
      <div className="container mx-auto  max-w-7xl flex-1 lg:grid lg:auto-cols-[200px_1fr] lg:grid-flow-col lg:gap-x-4">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div className="bg-white p-4 dark:bg-slate-800 lg:my-4 lg:min-h-screen lg:rounded-lg lg:shadow-sm ">
          <EmblaCarousel
            slides={SLIDES}
            options={{
              loop: true,
              duration: 20,
              inViewThreshold: 0,
            }}
          />
          <Tabs defaultValue="infomation" className="w-full">
            <TabsList>
              <TabsTrigger value="infomation">最新情報</TabsTrigger>
              <TabsTrigger value="infosite">お知らせ</TabsTrigger>
              <TabsTrigger value="timeline">タイムライン</TabsTrigger>
              <TabsTrigger value="dev">Dev</TabsTrigger>
            </TabsList>
            <TabsContent value="infomation">
              {' '}
              <TestSpreadOperator test={10} />
            </TabsContent>
            <TabsContent value="infosite" className="">
              <span>ここにお知らせ</span>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="キャラクター" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="h-48">
                      <SelectLabel>キャラクター</SelectLabel>
                      {characterlist.map((index) => (
                        <SelectItem value={index.value} key={index.value}>
                          {index.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="コラボキャラクター" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="h-48">
                      <SelectLabel>コラボキャラクター</SelectLabel>
                      {characterkorabolist.map((index) => (
                        <SelectItem value={index.value} key={index.value}>
                          {index.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="属性" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>属性</SelectLabel>
                      {elementlist.map((index) => (
                        <SelectItem value={index.value} key={index.value}>
                          <div className=" flex items-center">
                            <div className={`mr-2 h-3 w-3 rounded-2xl`} style={{ backgroundColor: `${index.color}` }} />
                            {index.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <MultiSelect />
              </div>

              <h1 className="mt-8 text-2xl font-black">コンテンツテスト</h1>
              <div>{splits.length > 1 ? <Pagination href="/" max={splits.length} page={page} /> : ''}</div>
              <div className="my-4 grid flex-1 gap-4 text-center text-2xl md:grid-cols-2 lg:grid-cols-4">
                {posts
                  .filter((post) => post.draft === false)
                  .map((post, idx) => (
                    <PostCard key={idx} {...post} />
                  ))}
              </div>
              <div>{splits.length > 1 ? <Pagination href="/" max={splits.length} page={page} /> : ''}</div>

              <CharacterCard />
            </TabsContent>
            <TabsContent value="timeline" className="my-8 ">
              <div className="flex flex-1">
                <Calendar className="mr-2" />
                <h2 className="text-lg font-bold">タイムライン</h2>
              </div>
              <CountDownTimer />
            </TabsContent>
            <TabsContent value="dev" className="my-8 ">
              <div className="flex flex-1">dev</div>
              <Testcolorvar />
              <TestSpreadOperator test={10} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
