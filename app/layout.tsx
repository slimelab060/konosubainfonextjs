import './globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

const siteName = 'このファンまとめ';
const description = 'このファンの情報をまとめたサイトです';
const url = '';
const notojp = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notojp',
});

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@Blue_Sky_060sub',
    creator: '@Blue_Sky_060sub',
  },
  verification: {
    google: 'このファンまとめ',
  },
  alternates: {
    canonical: url,
  },

  //Vercel以外でデプロイするときはURLの指定が必要
  metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notojp.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
