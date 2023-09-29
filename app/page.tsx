import TestSpreadOperator from '@/components/TestSpreadOperator';
import { Testcolorvar } from '@/components/Testcolorvar';
import EmblaCarousel from '@/components/carousel';
import { ComboboxDemo } from '@/components/combobox';
import { SideMenu } from '@/components/sidemenu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

//<Image className="object-fill" src={test} alt="background-image" />
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto my-4 max-w-7xl flex-1 lg:grid lg:auto-cols-[200px_1fr] lg:grid-flow-col lg:gap-x-4">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div className="p-4 lg:min-h-screen lg:rounded-lg lg:border lg:bg-slate-800 lg:shadow-sm">
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
            </TabsList>
            <TabsContent value="infomation">
              <Testcolorvar />
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="infosite">
              <span>ここにお知らせ</span>
              <ComboboxDemo />
              <div className="my-4 grid flex-1 gap-4 text-center text-2xl md:grid-cols-4">
                <TestSpreadOperator />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
