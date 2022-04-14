import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br />
        Steven Castro
      </SectionTitle>
      <SectionText>
  I Build Websites and Design Databases.
   I build websites with great User Experience and Search Engine Optimization(SEO) in mind.
    Also Mobile Friendly :) 
      </SectionText>
      <Button onClick={()=> window.location='mailto:stcastro13@gmail.com'}>
        Learn More
      </Button>
      </LeftSection>
  </Section>
);

export default Hero;