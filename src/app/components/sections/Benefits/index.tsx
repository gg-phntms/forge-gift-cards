import { FaBolt } from "react-icons/fa6";

import { BenefitsWrapper, CardContainer, Benefit } from "./styles";

export const Benefits = () => {
  return (
    <BenefitsWrapper>
      <h2>Introduce your benefits</h2>
      <CardContainer>
        <Benefit>
          <p>
            <FaBolt />
          </p>
          <h3>Benefit 1</h3>
          <p>Note: This ISN&apos;T a feature.</p>
        </Benefit>
        <Benefit>
          <p>
            <FaBolt />
          </p>
          <h3>Benefit 2</h3>
          <p>What does the client get?</p>
        </Benefit>
        <Benefit>
          <p>
            <FaBolt />
          </p>
          <h3>Benefit 1</h3>
          <p>How do they benefit?</p>
        </Benefit>
      </CardContainer>
    </BenefitsWrapper>
  );
};
