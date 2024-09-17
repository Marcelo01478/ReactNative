import React, { useState} from 'react';
import { Header } from '../../components/Header';
import { SmallButton } from '../../components/SmallButton';
import { Input } from '../../components/Input';
import { CategorySelectbutton } from '../../components/CategorySelectbutton';
import { SmaLLButtonTypes } from '../../components/SmallButton/styles';
import { 
  Container, 
  ContainerButtons, 
  Content, 
  FormContainer, 
  Title, 
  ContentButton, 
  Button, 
  ButtonTitle
} from './styles';




type TypeTransactions = "up" | "down";

export function RegisterScreen() {

  const [selectType, setselectType] = useState<TypeTransactions>('up')

  function handlePress(type: TypeTransactions){
    setselectType(type)
  }

  
  return (
    <Container>
      <Header isHome={false} type={selectType} screenName='Cadastro de Transações'/>

      <Content>
        <FormContainer>
          <Title>Tipo de Transação</Title>

          <ContainerButtons>
            <SmallButton title="Entrada" type="up" isSelected={selectType === "up"} onPress={() => handlePress("up")}/>
            <SmallButton title="Saida" type="down" isSelected={selectType === "down"} onPress={() => handlePress("down")}/>
          </ContainerButtons>
          
          <Title>Dados da transação</Title>
          <Input />

          {selectType === "down" && <CategorySelectbutton /> }
        </FormContainer>

        <ContentButton>
          <Button type={selectType}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>
        </ContentButton>
       
      </Content>
    </Container>

  );
}
