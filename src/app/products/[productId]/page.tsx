import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId} `,
  };
};

const DetailProducts = ({ params }: Props) => {
  return <div>DetailProducts {params.productId}</div>;
};

export default DetailProducts;
