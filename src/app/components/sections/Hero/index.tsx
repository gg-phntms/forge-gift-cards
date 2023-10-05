import { HeroWrapper, ContentWrapper, ImageWrapper, Header, Subheader, CTAButton } from "./styles";

export const Hero = () => {
  return(
    <HeroWrapper>
      <ContentWrapper>
        <Header>Header that emphasises value, result or transformation</Header>
        <Subheader>Subheader that clearly explains what you provide to get the results</Subheader>
        <CTAButton>Specific CTA, e.g. "Register your interest"</CTAButton>
      </ContentWrapper>
      <ImageWrapper>
        <p>Happy customer image - show the "after" state of someone using your product or service.</p>
      </ImageWrapper>
    </HeroWrapper>
  )
}