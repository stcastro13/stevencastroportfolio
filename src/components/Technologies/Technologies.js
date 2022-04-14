import React from 'react';
import { DiFirebase, DiReact, DiZend, DiMongodb } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="technologies">
  <SectionDivider/>
  <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    As a Web Developer & Data Architect I have worked in many different environments from PHP to React and everything in between including setting up servers and databases 
  
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with
            creating and deploying websites on various platforms. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with database design and data management. Experience with SSIS, SSMS, Firebase, AWS and NoSQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>IT Business Analyst</ListTitle>
          <ListParagraph>
Experience with analytical thinking and problem solving.
 Detail-Oriented and comfortable creating workflow + DFD diagrams
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
</Section>
);

export default Technologies;