import React from 'react';
import { FlatList } from 'react-native';
import { Total } from '../../components/Total';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { Container ,ContainerBanners, Content, ContainerList } from './styles';

export type ListCardType = {
  id: string;
} & Pick<TransactionCardProps, "name" | "type" | "category" | "date" | "value">

const data: ListCardType[] = [
  {
      id:'1',
      name: 'Salário',
      type: 'up',
      value: 'R$6.000,00',
      date: '05/01/2024',
  },
  {
    id:'2',
    name: 'Compra do mes',
    type: 'down',
    value: 'R$1.000,00',
    category: 'Alimentação',
    date: '10/02/2024',
  },
  {
    id:'3',
    name: 'Conta de Luz',
    type: 'down',
    value: 'R$500,00',
    category: 'Casa',
    date: '10/03/2024',
  },
  {
    id:'4',
    name: 'Conta de Luz',
    type: 'down',
    value: 'R$500,00',
    category: 'Casa',
    date: '10/03/2024',
  },
  {
    id:'5',
    name: 'Conta de Luz',
    type: 'down',
    value: 'R$500,00',
    category: 'Casa',
    date: '10/03/2024',
  },
]



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

        <ContainerList>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
            <TransactionCard
              name={item.name}
              type={item.type}
              value={item.value}
              category={item.category}
              date={item.date}
            />}
            showsVerticalScrollIndicator={false}
          />
        </ContainerList>
      </Content>
      
    </Container>

  );
}
