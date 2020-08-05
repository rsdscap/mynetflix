import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
      <img className="Logo" src={Logo} alt="MyNetFlix logo"/>
      </a>
      <p>
        Criado por Rodrigo Souza
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
