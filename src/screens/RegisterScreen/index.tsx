import React, { useState} from 'react';
import { Modal } from 'react-native';
import { Header } from '../../components/Header';
import { SmallButton } from '../../components/SmallButton';
import { Input } from '../../components/Input';
import { CategorySelectbutton } from '../../components/CategorySelectbutton';
import { SelectModal } from '../SelectModal';
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

  const [selectType, setselectType] = useState<TypeTransactions>('up');
  const [category ,setCategory] = useState({key: "categoria", name: "Selecione a categoria"})
  const [ isOpenModal, setIsOpenModal] = useState(false);

  function handlePress(type: TypeTransactions){
    setselectType(type)
  }

  function handleOpenModal () {
    setIsOpenModal(true);
  }

  function handleCloseModal () {
    setIsOpenModal(false);
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

          {selectType === "down" && <CategorySelectbutton title={category.name} onPress={handleOpenModal}/>}
        </FormContainer>

        <ContentButton>
          <Button type={selectType}>
            <ButtonTitle>Confirmar</ButtonTitle>
          </Button>
        </ContentButton>
      </Content>

      <Modal visible={isOpenModal}>
        <SelectModal setCategory={setCategory} close={handleCloseModal} />
      </Modal>
    </Container>

  );
}
