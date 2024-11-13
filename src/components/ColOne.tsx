import React, { FC } from 'react';
//Components
import AnimBtn from './AnimBtn.tsx';
//Bootsrap
import 'bootstrap/dist/css/bootstrap.css';
import { Image, ButtonGroup } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

interface ColOneProps {
    LogoImg: string; 
    DocImg: string; 
    FolImg: string; 
    UplImg: string; 
}

const ColOne: FC< ColOneProps> = ({ LogoImg, DocImg, FolImg, UplImg }) => {
    const slideLeft = useSpring({
        from: { x: '-200px', opacity: 0 },
        to: { x: '0px', opacity: 1 },
        config: { tension: 120, friction: 15 },
    });
    
    return (
        <animated.div style={slideLeft} className='d-flex flex-column gap-3 cs-bg-blue p-4 cs-radius align-items-start'>
            <Image fluid src={LogoImg} alt='logo' />
            <ButtonGroup className='gap-2 w-50'>
                <AnimBtn><Image src={DocImg} alt='document' /></AnimBtn>
                <AnimBtn><Image src={FolImg} alt='folder' /></AnimBtn>
                <AnimBtn><Image src={UplImg} alt='upload' /></AnimBtn>
            </ButtonGroup>
        </animated.div>
    );
}

export default ColOne;