import { ArticleNavigation } from "./navigation";

export default async function ArticleDetails(
  { params, searchParams }: {
    params: Promise<{ articleId: string}>,
    searchParams: Promise<{ lang: "en" | "fr" | "sp" }>,
  }
) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <>
      <h1>Profile</h1>
      <p>Reading article {articleId} in language {lang}</p>
      <ArticleNavigation articleId={articleId} />
    </>
  );
}
             