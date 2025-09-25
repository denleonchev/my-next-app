import { Metadata } from "next";

type Props = { params: Promise<{ productId: string }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
  };
}

export default async function ProductDetails({ params }: Props) {
    const { productId } = await params;
  
  return (
    <h1>Details about product {productId}</h1>
  );
}
