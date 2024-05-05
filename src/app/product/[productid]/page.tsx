import Container from "@/app/components/container";
import ProductDetails from "./productDetail";
import { product } from '@/utils/product';


interface IParams {
  productId?: string;
}

const productPage = ({ params }: { params: IParams }) => {
  console.log("params", params);
  return (
    <div className=" p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default productPage;
