import React from 'react';

import { Container, LoadIndicator  } from './styles';

interface LoadingTypes {
    background: string;
    LoadColor: string;
}

export function Loading({background, LoadColor}: LoadingTypes){
    return(
        < Container background={background}>
            <LoadIndicator LoadColor={LoadColor}/>
        </Container>
    )
}