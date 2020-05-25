import { hot } from 'react-hot-loader/root';
import React from 'react';

import AppRoutes from './routes/Routes';
import store from './store/store';
import { GlobalStyle } from './global/GlobalStyle';
import { Provider } from 'react-redux';
import { GridProvider } from '@/hooks/contextHooks';

const App = () => {
    console.log(process.env.REACT_APP_EXAMPLE);

    return (
        <Provider store={store}>
            <GridProvider>
                <div className='App'>
                    <GlobalStyle />
                    <AppRoutes />
                </div>
            </GridProvider>
        </Provider>
    );
};

export default hot(App);
