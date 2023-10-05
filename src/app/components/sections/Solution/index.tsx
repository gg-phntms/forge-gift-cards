import {
  SolutionWrapper,
  MediaWrapper,
  ContentWrapper,
  LargeText,
} from "./styles";

export const Solution = () => {
  return (
    <SolutionWrapper>
      <MediaWrapper>
        <p>Ideally, you want a short video here.</p>
      </MediaWrapper>
      <ContentWrapper>
        <h2>Problem/Solution section</h2>
        <LargeText>
          <strong>Talk about the main pain point. </strong>This paragraph should
          be slightly larger - it (apparently) makes people more likely to read
          to the end.
        </LargeText>
        <p>
          <strong>Agitate with examples. </strong>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Asperiores, officia porro commodi quos
          iusto eum mollitia doloremque nobis ratione quam assumenda.
        </p>
        <p>
          <strong>Introduce your solution. </strong>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Asperiores, officia porro commodi quos
          iusto eum mollitia doloremque nobis ratione quam assumenda.
        </p>
      </ContentWrapper>
    </SolutionWrapper>
  );
};
