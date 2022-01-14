import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noppading>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Nicolás, <br />
        I’m a web & soft­ware devel­op­er from Argentina
      </SectionTitle>
      <SectionText>
        I have been working as a freelance web designer and software developer since 2016.
      </SectionText>

    </LeftSection>
  </Section>
);

export default Hero;