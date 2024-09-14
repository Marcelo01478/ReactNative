import React from 'react';

import { Container, Title, Logo, HeaderType, ScreenName } from './styles';

interface HeaderPorps {
    isHome: boolean,  
    screenName: string, 
    type: HeaderType ["type"],
}

export function Header({isHome, screenName, type }: HeaderPorps){
    return(
        <>
        {
            isHome ? (
                <Container type ={type}>
                    <Logo />
                    <Title>{screenName}</Title>  
                </Container>  
            ) : (
                <Container type ={type}> 
                    <ScreenName>{screenName}</ScreenName>   
                </Container>   

            )
        }
    
        </>
        
    )
}