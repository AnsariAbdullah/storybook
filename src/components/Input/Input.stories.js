import React from 'react';
import Input from './Input';
import Center from '../Center/Center'

export default {
	title: 'Form/Input',
	component: Input,
	decorators: [story => <Center>{story()}</Center>]
}

export const Small = () => <Input size='small' placeholder='Small'/>
export const Medium = () => <Input size='medium' placeholder='Medium'/>
export const Large = () => <Input size='large' placeholder='Large'/>


// support for storyname
// we can give a name for a story and not care about for what the export name of that story is

Small.storyName = 'Small Input';

// here Small is the name of function we exported and 'Small Input' is what we named it