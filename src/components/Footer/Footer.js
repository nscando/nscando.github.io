import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=5492944571652&text=Hola,%20me%20contacto%20desde%20tu%20web.">Here.</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nicolas.scandizzo@gmail.com">Contact me.</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Nicolás Scandizzo</Slogan>
          <Slogan>Copyright &copy; {new Date().getFullYear()}</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/nscando/'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/nscando/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/nscndzz/'>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
