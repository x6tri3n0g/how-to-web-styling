import '../styles/globals.js';

import { Breadcrumb, Layout, Menu } from 'antd';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const { Header, Content, Footer } = Layout;

const App = () => (
    <ThemeProvider theme={theme}>
        <div>Deep breath...</div>
    </ThemeProvider>
);

export default App;
