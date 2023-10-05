import { Hero } from "./components/sections/Hero";
import { Navbar } from "./components/sections/Navbar";
import { PageContainer, ContentContainer } from "./styles";

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <ContentContainer>
        <p>[Content goes here]</p>
      </ContentContainer>
    </PageContainer>
  );
}
