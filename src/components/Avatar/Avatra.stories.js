import React from 'react';
import Avatra from './Avatar';

export default {
	title: 'Avatar',
	component: Avatra
}

export const Normal = () => <Avatra variant='normal'>AA</Avatra>
export const Small = () => <Avatra variant='small'>AA</Avatra>
export const Big = () => <Avatra variant='big'>AA</Avatra>
export const Profile = () => <Avatra variant='profile'>AA</Avatra>