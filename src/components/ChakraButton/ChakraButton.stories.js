import React from 'react';
import { Button } from '@chakra-ui/core';

export default {
	title: 'Chakra/Button',
	component: Button,
	argTypes: {
		onClick: { action: 'clicked' },
		onMouseOver: {action: 'hovered'}
	},
}

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
	variantColor: 'green',
	children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
	variantColor: 'red',
	children: 'Danger',
	disabled: false
}

export const Log = () => (
	<Button variantColor='blue' onClick={()=>console.log('Button clicked')}>
		Log
	</Button>
)