import { createClient } from "microcms-js-sdk";

// microCMSとの連携
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// ページ毎の必要なデータを取得
export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("getPostBySlug");
    console.log(err);
  }
}

// 全ての記事のタイトル、スラッグを取得
export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { limit: limit, orders: "-publishDate", fields: "title,slug" },
    });
    return slugs.contents;
  } catch (err) {
    console.log("getAllSlugs");
    console.log(err);
  }
}

// 全ての記事のタイトル、スラッグ、アイキャッチ、カテゴリーを取得
export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        limit: limit,
        orders: "-publishDate",
        fields: "title,slug,eyecatch,categories",
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("getAllPosts");
    console.log(err);
  }
}

// 全てのカテゴリーのid、名前、スラッグを取得
export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: { fields: "id,name,slug", limit: limit },
    });
    return categories.contents;
  } catch (err) {
    console.log("getAllCategories");
    console.log(err);
  }
}
