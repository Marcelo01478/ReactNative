import React from 'react';
import { Total } from '../../components/Total';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Container ,ContainerBanners, Content } from './styles';


export function Home () {
  return (
    <Container>
      <Header isHome type={"up"} screenName='MyMoney'/>

      <Content>
        <Total />
        <ContainerBanners>
          <Banner title='Entradas' type='up' value='R$6.000' />
          <Banner title='Saídas' type='down' value='R$1.000'/>
        </ContainerBanners>
      </Content>
      
    </Container>

  );
}
