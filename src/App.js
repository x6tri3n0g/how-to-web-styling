import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import React from 'react';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

const Card = styled.div`
    background-color: red;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: pink;
    ${Card}:last-child {
        background-color: blue;
    }
`;

const Button = styled.button`
    border-radius: 30px;
    padding: 25px 15px;
    background-color: ${(props) => props.theme.successColor};
`;

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Form />
                <Form />
                <Form />
                <Form />
                <Form />
            </Container>
        </ThemeProvider>
    );
}

export default App;
