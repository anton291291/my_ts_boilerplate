import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { EntranceForm } from './index';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: '/Forms',
    component: EntranceForm,
    decorators: [withKnobs]
};

export const Storybook_EntranceForm = () => (
    <BrowserRouter>
        <EntranceForm />
    </BrowserRouter>
);
