import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { EntranceForm } from './index';

export default {
    title: '/Forms',
    component: EntranceForm,
    decorators: [withKnobs]
};

export const Storybook_EntranceForm = () => <EntranceForm />;
