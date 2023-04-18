import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { BsPhoneVibrate,  } from 'react-icons/bs';
import { RiRocketLine } from 'react-icons/ri';
const iconStyle = (Icon) => <Icon size="5rem" color="#fff" />;

export const featuresData = [
	{
		name: 'Performance UGH',
		description: `Providing User Generated Content (UGC) that converts  at scale. In-house team of 30 + content creators and worldwide network`,
		icon: iconStyle(AiFillSetting),
		imgClass: 'one',
	},
	{
		name: 'Paid Social',
		description: 'Our system is easy to use and integrate ',
		
		icon: iconStyle(BsPhoneVibrate),
		imgClass: 'two',
	},
	{
		name: 'SEM + Landing Page',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(RiRocketLine),
		imgClass: 'three',
	},

];
