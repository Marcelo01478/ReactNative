import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
  
      <Container>
        <Title>BBBbbb</Title>
        <Title>AAAA</Title>
      </Container>
   
  );
}

const Container = styled.View` 
  flex: 1;
  background-color: blue;
  justify-content: center; 
  align-items: center;
  `;
const Title = styled.Text`
font-size:32px;
`