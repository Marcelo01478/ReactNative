import React from 'react';

import { Container, Title, SmaLLButtonTypes} from './styles';

interface SmaLLButtonPorps {
    title: string;
    type: SmaLLButtonTypes;
    onPress: () => void;
    isSelected: boolean;
}
   

export function SmallButton({ title, type, onPress, isSelected }: SmaLLButtonPorps){
    return(
        < Container type ={type} onPress={onPress} isSelected={isSelected}>
            <Title>{title}</Title>
        </Container>
    )
}