import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import React from 'react';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: pink;
`;

const Card = styled.div`
    background-color: white;
`;

const Button = styled.button`
    border-radius: 30px;
    padding: 25px 15px;
    background-color: ${(props) => props.theme.successColor};
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Form />
            </Container>
        </ThemeProvider>
    );
}

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);

export default App;
