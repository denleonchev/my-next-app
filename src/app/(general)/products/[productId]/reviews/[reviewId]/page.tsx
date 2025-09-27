import { redirect } from "next/navigation";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({ params }: { params: Promise<{ reviewId: string, productId: string }> }) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Random error");
  }

  const { reviewId, productId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound()
    redirect("/products");
  }

  return (
    <>
      <h1>Review {reviewId} for product {productId}</h1>
    </>
  );
}
             