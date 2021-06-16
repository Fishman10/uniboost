import { MainLayout } from "../../components/MainLayout";
import { ProductsListContainer } from "../../components/lists/ProductsListContainer";

export default function Products() {
  return (
    <MainLayout title="Товары">
      <ProductsListContainer />
    </MainLayout>
  );
}
