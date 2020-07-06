import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';

import AppRoutes from './routes/Routes';
import store from './store/store';
import { GlobalStyle } from './global/GlobalStyle';
import { Provider } from 'react-redux';

const App = () => {

   /*  useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []); */

    return (
        <Provider store={store}>
            <div className='App'>
                <GlobalStyle />
                <AppRoutes />
            </div>
        </Provider>
    );
};

export default hot(App);
