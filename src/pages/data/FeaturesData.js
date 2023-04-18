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
		description: `Providing User Generated Content (UGC) that converts  at scale. In-house team of 30 + content creators and worldwide network.
		High-quality + engaging content. Match you with the perfect content creators for your brand ,
		Guaranteed satisfaction of the UGC content we create. `,
		icon: iconStyle(AiFillSetting),
		imgClass: 'one',
	},
	{
		name: 'Paid Social',
		description: 'Setup Manage And Scale Your TikTok/ Meta Ad Campaigns.Strategic audience targeting. Data-driven analysis .Constantly testing new angles. Results- driven approach  ',
		
		icon: iconStyle(BsPhoneVibrate),
		imgClass: 'two',
	},
	{
		name: 'SEM + Landing Page',
		description: 'A holistic approach focusing on every step of the funnel. Optimize your landing pages. Optimize your CTAs. Capture leads. Increased sales conversion rate ',
		icon: iconStyle(RiRocketLine),
		imgClass: 'three',
	},

];
