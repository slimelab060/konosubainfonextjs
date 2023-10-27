import { Label } from '@radix-ui/react-dropdown-menu';
import { Calendar } from 'lucide-react';

import Image from 'next/image';
import CharacterCard from '@/app/(character)/character/page';
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
import { Toggle } from '@/components/ui/toggle';
import {
  elementlist,
  weaponlist,
  raritylist,
  costumelist,
  traitlist,
  characterlist,
  characterkorabolist,
} from '@/data/selectlist';

const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface PageProps {
  searchParams: { page: number };
}

export default function Home({ searchParams }: PageProps) {
  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto max-w-7xl flex-1 lg:container lg:grid lg:auto-cols-[200px_1fr] lg:grid-flow-col lg:gap-x-4">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div className="border bg-card p-4 lg:my-4 lg:min-h-screen lg:rounded-md lg:shadow-sm">
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
              <TestSpreadOperator test={16} />
            </TabsContent>
            <TabsContent value="infosite" className="my-4 w-full">
              <Card className="my-4">
                <CardHeader>
                  <CardTitle>属性</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {elementlist.map((index) => (
                    <div className="flex items-center " key={index.value}>
                      <Toggle aria-label={index.value} variant="outline" size="lg" className="w-full bg-background">
                        <Image src={index.image} alt={index.label} width={24} height={24} className="mr-2" />
                        <span className="text-base font-medium">{index.label}</span>
                      </Toggle>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardHeader>
                  <CardTitle>武器</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {weaponlist.map((index) => (
                    <div className="flex items-center" key={index.value}>
                      <Toggle aria-label={index.value} variant="outline" size="lg" className="w-full bg-background">
                        <Image src={index.image} alt={index.label} width={24} height={24} className="mr-2" />
                        <span className="text-base font-medium">{index.label}</span>
                      </Toggle>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardHeader>
                  <CardTitle>レアリティ</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {raritylist.map((index) => (
                    <div className="flex items-center" key={index.value}>
                      <Toggle aria-label={index.value} variant="outline" size="lg" className="w-full bg-background">
                        <span className="text-base font-medium">{index.label}</span>
                      </Toggle>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardHeader>
                  <CardTitle>コスチューム</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {costumelist.map((index) => (
                    <div className="flex items-center" key={index.value}>
                      <Toggle aria-label={index.value} variant="outline" size="lg" className="w-full bg-background">
                        <span className="text-base font-medium">{index.label}</span>
                      </Toggle>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardHeader>
                  <CardTitle>特性</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {traitlist.map((index) => (
                    <div className="flex items-center" key={index.value}>
                      <Toggle aria-label={index.value} variant="outline" size="lg" className="w-full bg-background">
                        <span className="text-base font-medium">{index.label}</span>
                      </Toggle>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardHeader>
                  <CardTitle>キャラクター</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {characterlist.map((index) => (
                    <div className="flex items-center" key={index.value}>
                      <Toggle aria-label={index.value} variant="outline" size="lg" className="w-full bg-background">
                        <span className="text-base font-medium">{index.label}</span>
                      </Toggle>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="my-4">
                <CardHeader>
                  <CardTitle>コラボキャラクター</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {characterkorabolist.map((index) => (
                    <div className="flex items-center" key={index.value}>
                      <Toggle aria-label={index.value} variant="outline" size="lg" className="w-full bg-background">
                        <span className="text-base font-medium">{index.label}</span>
                      </Toggle>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="my-4 rounded-md border bg-card p-4">
                <p className="pb-2 text-lg font-medium">その他</p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                              <div
                                className={`mr-2 h-3 w-3 rounded-2xl`}
                                style={{ backgroundColor: `${index.color}` }}
                              />
                              {index.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <MultiSelect />
                </div>
              </div>
              <CharacterCard searchParams={searchParams} />
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
