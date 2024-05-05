import { products } from "../utils/products";
import { truncateText } from "../utils/truncateText";
import Container from "./components/container";
import HomeBanner from "./components/homeBanner";
import ProductsCard from "./components/product/productCard";

export default function Home() {
  return (
    <>
      <div className=" p-8">
        <Container>
          <div>
            <HomeBanner />
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {products.map((product: any) => {
              return <ProductsCard key={product} data={product} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
