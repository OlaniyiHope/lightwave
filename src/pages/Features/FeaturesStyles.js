import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.1px;
	margin: auto;
	color: #000;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	color: #fff;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	
	
	
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
		color: #fff;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
		color: #fff;
	}
`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #000;
	
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 0px;
	


`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 17px;
	color: #fff;
	margin-top: 5px;
	margin-bottom: 5px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		
		letter-spacing: 0.1px;
		color: #fff;
	}
`;
export const FeatureText = styled.p`
	
	text-align: justify;
	font-size: 14px;
	line-height: 1.73;
	letter-spacing: 0.1px;
	color: #fff;

	@media screen and (max-width: 768px) {
	
		color: #fff;
	}
`;
