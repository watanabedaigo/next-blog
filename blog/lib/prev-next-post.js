export function prevNextPost(allSlugs, currenrSlug) {
  const numberOfPost = allSlugs.length;

  const index = allSlugs.findIndex((slug) => {
    return slug.slug === currenrSlug;
  });

  const prevPost =
    index + 1 === numberOfPost ? { title: "", slug: "" } : allSlugs[index + 1];
  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost, nextPost];
}
