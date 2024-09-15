import React from 'react';
import { Total } from '../../components/Total';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { TransactionCard } from '../../components/TransactionCard';
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

        <TransactionCard
          name= "Compra do mês " 
          type="up"
          value="R$1.000"
          category="Alimentação"
          date= "12/01/2024"
          />
      </Content>
      
    </Container>

  );
}
