import Header from "@/Components/layout/Heder";
import Footer from "@/Components/layout/Footer";
import Banner from "@/feacher/Home/Banner";
import Services from "@/feacher/Home/Services";
import DescriptionStor from "@/feacher/Home/descriptionStor";
import Container from "@/Components/Container";
import FashionMagazine from "@/feacher/Home/FashionMagazine";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <DescriptionStor />
      </Container>
      <Services />
      <Container>
        <FashionMagazine />
      </Container>

      <Footer />
    </>
  );
}
