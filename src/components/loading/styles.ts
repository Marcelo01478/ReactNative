import styled from "styled-components/native";

type LoadingTypes = {
    background?: string;
    LoadColor?: string;
}

export const Container = styled.View<LoadingTypes>`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, background }) => background ? background : theme.COLORS.PRIMARY};

`;  

export const LoadIndicator = styled.ActivityIndicator.attrs<LoadingTypes>(({theme, LoadColor}) =>({
    color: LoadColor ? LoadColor : theme.COLORS.LIGHT,
    size: 'large'
}))<LoadingTypes>``;