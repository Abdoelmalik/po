import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        Welcome to my Portfolio.
      </SectionTitle>
      <SectionText>
        “In the end, it all comes down to 0 and 1”
      </SectionText>
      <Button onClick={()=> window.location = '#about' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;