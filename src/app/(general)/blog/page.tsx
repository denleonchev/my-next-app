export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

  return (
    <>
      <h1>Blog</h1>
    </>
  );
}
             