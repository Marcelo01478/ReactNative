import React from 'react';
import { Container, Title, Icon } from './styles';

interface CategorySelectbuttonPorps {
    title: string, 
    onPress: () => void; 
    
}

export function CategorySelectbutton({title, onPress}:  CategorySelectbuttonPorps){
    return(
        < Container>
            <Title>{title}</Title>
            <Icon/>   
        </Container>
    )
}