import React, { FC, useState, useEffect } from 'react';
//Bootsrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, ProgressBar } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

interface ColTwoProps {
    percNum: number;
    spaceLeft: number;
}

const ColTwo: FC<ColTwoProps> = ({ percNum, spaceLeft }) => {
    const [percPB, setPercPB] = useState(0);
    const [leftS, setLeftS] = useState(1000);

    const sliderRight = useSpring({
        from: { x: '200px', opacity: 0 },
        to: { x: '0px', opacity: 1 },
        config: { tension: 120, friction: 15 },
    });

    useEffect(() => { 
        const timeoutId = setTimeout(() => { 
            setPercPB(percNum);
        }, 500); 
        return () => clearTimeout(timeoutId); 
    }, [percNum]);

    useEffect(() => { 
        const duration = 500; 
        // total animation duration in ms 
        const stepTime = 20; 
        // time between updates in ms 
        const steps = duration / stepTime; 
        const stepSize = (1000 - spaceLeft) / steps; 
        const startAnimation = () => { 
            let currentStep = 0; 
            const intervalId = setInterval(() => { 
                setLeftS((prev) => Math.max(prev - stepSize, spaceLeft)); 
                currentStep += 1; 
                if (currentStep >= steps) { 
                    clearInterval(intervalId); 
                    setLeftS(spaceLeft); 
                    // Ensure the final value is set 
                    } 
                }, stepTime); 
            }; 
            const timeoutId = setTimeout(startAnimation, 500); 
            // 500ms delay 
            return () => { 
                clearTimeout(timeoutId); 
            }; 
        }, [spaceLeft]);

    return (
        <animated.div style={sliderRight} className='cs-pos cs-bg-blue rounded rounded-4 p-4 d-flex flex-column gap-2'>
            <h1 className='m-0 h6 text-white'>You’ve used <span className='cs-fw-700'>815 GB</span> of your storage</h1>
            <ProgressBar now={percPB} className='border border-2 cs-pb' />
            <Container fluid className='p-0 d-flex flex-row align-items-center justify-content-between text-white'>
                <h2 className='cs-fw-700 h6 m-0'>0 GB</h2>
                <h2 className='cs-fw-700 h6 m-0'>1000 GB</h2>
            </Container>
            <Container fluid className='cs-w-2 cs-note p-2 rounded rounded-4 bg-white d-flex flex-row align-items-center justify-content-center gap-2'>
                <h3 className='text-black cs-fw-700 h1'>{leftS.toFixed(0)}</h3>
                <h4 className='text-black h6'>GB Left</h4>
            </Container>
        </animated.div>
    );
}

export default ColTwo;