import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
}

export function usePageMeta({ title, description }: PageMetaOptions): void {
  useEffect(() => {
    document.title = title;

    const setMetaContent = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [title, description]);
}
