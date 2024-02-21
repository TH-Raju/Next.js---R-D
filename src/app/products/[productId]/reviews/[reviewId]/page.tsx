const ReviewDeatails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      Review Details {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDeatails;
