import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

import React from 'react';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Button success>Hello</Button>
            <Button danger rotationTime={5}>
                Hello
            </Button>
            <Anchor as="a" href="https://www.google.com">
                Go to google
            </Anchor>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: pink;
`;

const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:foucus {
        outline: none;
    }
    background-color: ${(props) => (props.danger ? '#e74c3c' : '#2ecc71')};
    ${(props) => {
        if (props.danger) {
            return css`
                animation: ${rotation} ${props.rotationTime}s linear infinite;
            `;
        }
    }}
`;

const Anchor = styled(Button)`
    text-decoration: none;
`;

const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export default App;
