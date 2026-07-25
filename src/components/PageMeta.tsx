import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schema?: object | object[];
}

export function PageMeta({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://www.basdilspharma.com/Images/logo.png',
  schema,
}: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | Basdils Pharmaceuticals`;
    document.title = fullTitle;

    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setCanonical = (href: string) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const currentUrl = canonical || window.location.href;

    setMetaTag('name', 'description', description);
    setCanonical(currentUrl);

    setMetaTag('property', 'og:title', ogTitle || fullTitle);
    setMetaTag('property', 'og:description', ogDescription || description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', ogImage);

    setMetaTag('name', 'twitter:title', ogTitle || fullTitle);
    setMetaTag('name', 'twitter:description', ogDescription || description);
    setMetaTag('name', 'twitter:image', ogImage);

    let scriptTag = document.getElementById('page-jsonld-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-jsonld-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, schema]);

  return null;
}
