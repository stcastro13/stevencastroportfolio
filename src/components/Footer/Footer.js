import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:562-445-2167">562-445-2167</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:stcastro13@gmail.com">stcastro13@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    
    <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>Built with Next.js</Slogan>
    </CompanyContainer>
    <SocialIcons href="https://github.com/stcastro13">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/stcastro13/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
