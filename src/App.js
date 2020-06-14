import styled, { createGlobalStyle, css } from 'styled-components';

import React from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

const awesomeCard = css`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: pink;
`;

const Input = styled.input.attrs({
    required: true,
})`
    border: none;
    border-radius: 5px;
    ${awesomeCard};
`;

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Input placeholder="Hello" />
        </Container>
    );
}

export default App;
