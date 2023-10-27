/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc', //auto-tocクラスの子要素としてTable Of Contentsを作成する
      contentSelector: '.toc-content', //post-main-contentクラスの子要素のheadingを走査する
      headingSelector: 'h2, h3',
      headingsOffset: 100,
      collapseDepth: 6,
      scrollSmoothOffset: -100,
      scrollSmoothDuration: 300,
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div className=" bottom-0 left-0 top-14 z-[5] w-full bg-background p-4 dark:bg-slate-800 lg:sticky lg:left-auto lg:top-[4.55rem] lg:my-4  lg:rounded-lg lg:shadow-sm">
      <span>目次</span>
      <div className="toc" />
      <style jsx global>{`
        .toc {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          padding-right: 0.75rem;
          font-size: 0.875rem;
        }

        .toc-list .toc-list {
          border-left-width: 2px;
          border-color: hsl(var(--muted));
          margin-left: 1.25rem;
        }

        .toc-list-item {
          padding-bottom: 0.5rem;
        }

        .toc-list-item:last-child {
          padding-bottom: 0;
        }

        .toc-link {
          display: flex;
          position: relative;
          width: 100%;
          padding-top: 0.375rem;
          padding-bottom: 0.375rem;
          padding-left: 2.25rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: hsl(var(--muted-foreground));
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .toc-link:hover {
          color: var(--muted-foreground);
        }

        .toc-link::before {
          position: absolute;
          --tw-content: '';
          top: 0.75rem;
          left: 1rem;
          content: var(--tw-content);
          background-color: hsl(var(--card));
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          border-left-width: 2px;
          border-width: 2px;
          border-color: hsl(var(--card));
        }

        .is-active-link {
          color: hsl(var(--foreground));
          font-weight: 700;
        }
        .is-active-link::before {
          background-color: hsl(var(--primary));
          outline-color: hsl(var(--primary));
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
      `}</style>
    </div>
  );
};
