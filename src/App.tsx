import React from 'react';

import AppRoutes from './routes/Routes';
import store from './store/store';
import { GlobalStyle } from './global/GlobalStyle';
import { Provider } from 'react-redux';

const App = () => {
    
    console.log(process.env.REACT_APP_EXAMPLE);

    return (
        <Provider store={store}>
            <div className='App'>
                <GlobalStyle />
                <AppRoutes />
            </div>
        </Provider>
    );
};

export default App;
