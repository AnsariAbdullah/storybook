import React from 'react';
import Pill from './Pill';

export default {
	title: 'Pill',
	component: Pill,
}

export const Primary = () => <Pill variant='primary'>Primary</Pill>
export const Secondary = () => <Pill variant='secondary'>Secondary</Pill>
export const Info = () => <Pill variant='info'>Info</Pill>