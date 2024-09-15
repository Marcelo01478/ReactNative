import React from 'react';

import { 
        Container, 
        ContainerTop, 
        Name, 
        Tag, 
        ContainerBottom, 
        Date, Value, TagTitle, CategoryTitle, CardTypes } from './styles';

interface TransactionCardPorps {
    name: string;
    type: CardTypes;
    value: string;
    category?: string;
    date: string;
}

export function TransactionCard({name, type, value, category, date }: TransactionCardPorps){

    const typeName = type === "up" ? "Entrada" : "Saída"

    return(
        < Container>
    
            <ContainerTop>
                <Name>{name}</Name>
                <Tag type={type}>
                    <TagTitle>{typeName}</TagTitle>
                </Tag>
            </ContainerTop>
            <Value type={type}>{value}</Value>
            <ContainerBottom>
                <CategoryTitle>{category}</CategoryTitle>
                <Date>{date}</Date>
            </ContainerBottom>
            
        </Container>
    )
}