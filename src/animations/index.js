import {
	bounceInDown,
	pulse,
	tada,
	lightSpeedIn,
	slideInDown,
} from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const BounceInDown = styled.div`
	animation: 2s ${keyframes`${bounceInDown}`} 1;
`;
export const Pulse = styled.div`
	animation: 2s ${keyframes`${pulse}`} 2;
`;
export const Tada = styled.div`
	animation: 2s ${keyframes`${tada}`} 1;
`;
export const LightSpeedIn = styled.div`
	animation: 2s ${keyframes`${lightSpeedIn}`} 1;
`;
export const SlideInDown = styled.div`
	animation: 2s ${keyframes`${slideInDown}`} 1;
`;
