import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../src/global/GlobalStyle';
import { Box } from '@material-ui/core';

type Props = {
    children: React.ReactNode;
};

export const GlobalProvider: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Box m={2}>{children}</Box>
            </BrowserRouter>
        </Provider>
    );
};
