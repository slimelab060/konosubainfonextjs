import { compareDesc, format, parseISO } from 'date-fns';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { TestSpreadOperator } from '@/components/TestSpreadOperator';
import { Testcolorvar } from '@/components/Testcolorvar';
import EmblaCarousel from '@/components/carousel';
import CountDownTimer from '@/components/countdowntimer';
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

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

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

              <div className="my-4 grid flex-1 gap-4 text-center text-2xl md:grid-cols-2 lg:grid-cols-4">
                {posts.map((post, idx) => (
                  <PostCard key={idx} {...post} />
                ))}
              </div>
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
