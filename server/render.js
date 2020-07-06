import { StaticRouter } from 'react-router-dom';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import {
    ServerStyleSheets as MUIstyles,

} from '@material-ui/core/styles';
import { ServerStyleSheet as SCstyles } from 'styled-components';
import App from '../src/App';

export const renderer = (req, data) => {
    const MUI = new MUIstyles();
    const StyledComponents = new SCstyles();
    const context = {};

    try {
        const html = ReactDOMServer.renderToString(
            MUI.collect(
                StyledComponents.collectStyles(
                    <StaticRouter location={req.url} context={context}>
                        <App />
                    </StaticRouter>
                )
            )
        );

        const MUIcss = MUI.toString();
        const css = StyledComponents.getStyleTags();

        data = data
            .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
            .replace(
                '</head>',
                `${css}<style id="jss-server-side">${MUIcss}</style></head>`
            );
    } catch (err) {
        console.log(err);
    } finally {
        StyledComponents.seal();
    }

    return data;
};
