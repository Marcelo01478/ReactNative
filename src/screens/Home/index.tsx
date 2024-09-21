import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import theme from '../../theme';
import { formatedValue, getTotalForTypes, } from '../../helpers/formatted';
import { Total } from '../../components/Total';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Loading } from '../../components/loading';
import { TransactionCard } from '../../components/TransactionCard';
import { useFetchTransactions } from '../../hooks/useFetchTransactions';
import { Container ,ContainerBanners, Content, ContainerList } from './styles';




export function Home () {
  const IsFocused = useIsFocused();
  const { transactions, loading, fetchTransactions} = useFetchTransactions()
  const { total, totalDown, totalUp } = getTotalForTypes(transactions);
  

  
  function renderListTransactions(){
    return(
      <ContainerList>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <TransactionCard
          name={item.name}
          type={item.type}
          value={formatedValue(item.value )}
          category={item.category}
          date={item.date}
        />}
        showsVerticalScrollIndicator={false}
      />
      </ContainerList>
    )

  }

  useEffect(() => {
    fetchTransactions();
  },[IsFocused])

  return (
    <Container>
      <Header isHome type={"up"} screenName='MyMoney'/>

      <Content>
        <Total value={total} />
        <ContainerBanners>
          <Banner title='Entradas' type='up' value={totalUp} />
          <Banner title='Saídas' type='down' value={totalDown} />
        </ContainerBanners>

        { loading ? <Loading background={theme.COLORS.BACKGROUND} LoadColor={theme.COLORS.PRIMARY}/> : renderListTransactions()}

      </Content>
      
    </Container>

  );
}
