import React from 'react';
import { Container, Section } from './Feature';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles';
import { featuresData } from '../data/FeaturesData';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { BsPhoneVibrate,  } from 'react-icons/bs';
import { RiRocketLine } from 'react-icons/ri';
import { GiCobweb } from 'react-icons/gi';
import { FaMobileAlt } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { SiGooglemarketingplatform } from 'react-icons/si';

const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What We Offer</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
			
					
					<FeatureColumn
					initial={initial}
					animate={animate}
				
				
				>
					<FeatureImageWrapper>
						<AiFillSetting size="5rem" color="#fff"  />
					</FeatureImageWrapper>
					<FeatureName>Performance UGC</FeatureName>
					<FeatureText><GoPrimitiveDot  />Providing User Generated Content (UGC) that converts  at scale.<br></br>
					<GoPrimitiveDot  />In-house team of 30 + content creators and worldwide network.<br></br>
					<GoPrimitiveDot  />High-quality + engaging content. Match you with the perfect content creators for your brand<br></br>
					<GoPrimitiveDot  />Guaranteed satisfaction of the UGC content we create.<br></br>
					
					
					</FeatureText>
					
					

			
				</FeatureColumn>
					<FeatureColumn
					initial={initial}
					animate={animate}
				
				
				>
					<FeatureImageWrapper>
					<BsPhoneVibrate size="5rem" color="#fff" />
					</FeatureImageWrapper>
					<FeatureName>Paid Social</FeatureName>
					<FeatureText>Setup Manage And Scale Your TikTok/ Meta Ad Campaigns<br></br>
					<GoPrimitiveDot  />Strategic audience targeting<br></br>
					<GoPrimitiveDot  />Data-driven analysis<br></br>
					<GoPrimitiveDot  />Constantly testing new angles<br></br>
					<GoPrimitiveDot  />Results- driven approach  <br></br>
					
					</FeatureText>
					
				
			
				</FeatureColumn>
					<FeatureColumn
					initial={initial}
					animate={animate}
				
				
				>
					<FeatureImageWrapper>
					<RiRocketLine size="5rem" color="#fff"  />
					</FeatureImageWrapper>
					<FeatureName>SEM + Landing Page</FeatureName>
					<FeatureText>A holistic approach focusing on every step of the funnel.<br></br>
					<GoPrimitiveDot  />Optimize your landing pages<br></br>
					<GoPrimitiveDot  /> Optimize your CTAs.<br></br>
					<GoPrimitiveDot  />Capture leads.<br></br>
					<GoPrimitiveDot  />Increased sales conversion rate<br></br>
					<GoPrimitiveDot  />Hight prefromance hoidoid<br></br>
					<GoPrimitiveDot  />Hight prefromance hoidoid
					
					</FeatureText>
					
				</FeatureColumn>
				
					<FeatureColumn
					initial={initial}
					animate={animate}
				
				
				>
					<FeatureImageWrapper>
					<SiGooglemarketingplatform size="5rem" color="#fff"  />
					</FeatureImageWrapper>
					<FeatureName>Content Strategy </FeatureName>
					<FeatureText>We develop a tailored UGC strategy that aligns with your company unique goals and values.<br></br>
					<GoPrimitiveDot  />Develop a content taxonomy<br></br>
					<GoPrimitiveDot  /> Establish a process and workflow for content production .<br></br>
					<GoPrimitiveDot  />Plan and identify your brand voice.<br></br>
					
					
					</FeatureText>
					
				</FeatureColumn>
				
					<FeatureColumn
					initial={initial}
					animate={animate}
				
				
				>
				<FeatureImageWrapper>
				<FaMobileAlt size="5rem" color="#fff" />
				</FeatureImageWrapper>
				<FeatureName>Sustainable Mobile App</FeatureName>
				
				<FeatureText>App development driven by sustainability<br></br>
				<GoPrimitiveDot  />We use energy-efficient coding, streamline server requests, and implement energy-saving design elements to reduce your app's carbon footprint<br></br>
				<GoPrimitiveDot  /> We  ensure that your app runs on sustainable infrastructure<br></br>

				
				
				</FeatureText>
				</FeatureColumn>
				
					<FeatureColumn
					initial={initial}
					animate={animate}
				
				
				>
				<FeatureImageWrapper>
				<BsGlobe size="5rem" color="#fff" />
				</FeatureImageWrapper>
				<FeatureName>Sustainable Website Design</FeatureName>
					
				<FeatureText>We create stunning digital experiences that are also energy-efficient and low-impact on the environment.<br></br>
				<GoPrimitiveDot  />We optimize code and use energy-saving design elements to minimize your website's carbon footprint.<br></br>
				<GoPrimitiveDot  />  We prioritize renewable energy sources for web hosting and constantly explore innovative solutions to further reduce environmental impact.<br></br>

				
				
				</FeatureText>
					
				</FeatureColumn>
				
				
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;
