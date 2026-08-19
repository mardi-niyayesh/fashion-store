import Banner from "@/feacher/Home/Banner";
import Services from "@/feacher/Home/Services";
import DescriptionStor from "@/feacher/Home/descriptionStor";
import Container from "@/Components/Container";
import FashionMagazine from "@/feacher/Home/FashionMagazine";
import { bagProducts, womenProducts } from "@/feacher/Home/Product/DataProduct";
import CategorySection from "@/feacher/Home/Product/CategorySection";
import Question from "@/feacher/Home/question/Question";

export default function Home() {
  return (
    <>
      <Banner />

      <Container>
        <DescriptionStor />
      </Container>

      <Services />

      <Container>
        <FashionMagazine />
      </Container>

      <CategorySection
        title="لباس زنانه"
        products={womenProducts}
      />

      <CategorySection
        title="کیف"
        products={bagProducts}
      />

      <Question />
    </>
  );
}