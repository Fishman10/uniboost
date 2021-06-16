import { MainLayout } from "../../components/MainLayout";
import { BrandsListContainer } from "../../components/lists/BrandsListContainer";

const Brands: React.FC = () => {
  return (
    <MainLayout title="Бренды">
      <BrandsListContainer />
    </MainLayout>
  );
}

export default Brands