import { PageContainer, ContentContainer } from "./styles";
import { Solution } from "./components/sections/Solution";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Benefits } from "./components/sections/Benefits";

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <ContentContainer>
        <Solution />
        <Benefits />
        <p>[Content goes here]</p>
      </ContentContainer>
    </PageContainer>
  );
}
