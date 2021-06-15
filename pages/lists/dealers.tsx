import { MainLayout } from "../../components/MainLayout";
import { DealersListContainer } from "../../components/lists/DealersListContainer";

const Dealers: React.FC = () => {
  return (
    <MainLayout>
      <DealersListContainer />
    </MainLayout>
  );
}

export default Dealers