import Container from "@/app/components/container";
import ProductDetails from "./productDetail";
import ListRating from "./listRating";
import { products } from "@/utils/products";

interface IParams {
  productid?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log("params", params);

  const product = products.find((item) => item.id === params.productid);
  console.log("product found:", product);

  return (
    <div className=" p-8">
      <Container>
        <ProductDetails product={product} />
        <div className=" flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
