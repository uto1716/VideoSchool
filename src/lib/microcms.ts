import { createClient } from 'microcms-js-sdk';
import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk';

// microCMS クライアント
export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

// ブログの型定義
export type Blog = {
  title: string;
  body: string;
  eyecatch?: MicroCMSImage;
  category?: Category;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

// ブログ一覧取得
export const getBlogs = async (queries?: { limit?: number; offset?: number }) => {
  return await client.getList<Blog>({
    endpoint: 'blogs',
    queries,
  });
};

// ブログ記事詳細取得
export const getBlogDetail = async (contentId: string) => {
  return await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
  });
};
