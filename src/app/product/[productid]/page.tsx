import Container from "@/app/components/container";
import ProductDetails from "./productDetail";
import { product } from '@/utils/product';
import ListRating from "./listRating";


interface IParams {
  productId?: string;
}

const productPage = ({ params }: { params: IParams }) => {
  return (
    <div className=" p-8">
      <Container>
        <ProductDetails product={product} />
        <div className=" flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product}/>
        </div>
      </Container>
    </div>
  );
};

export default productPage;