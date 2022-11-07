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
