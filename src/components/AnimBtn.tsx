import React, { FC, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ReactNode } from 'react';

interface AnimBtnProps {
    children: ReactNode;
}

const AnimBtn: FC<AnimBtnProps> = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    background: hovered 
    ? 'hsl(228, 56%, 26%)' 
    : 'hsl(229, 57%, 11%)',
    border: hovered
    ? 'solid 1px hsl(229, 57%, 11%)' 
    : 'solid 1px hsl(228, 56%, 26%)',
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 220, friction: 12 },
  });

  return (
    <animated.button
      style={springProps}
      className="px-3 cs-ratio rounded rounded-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </animated.button>
  );
};

export default AnimBtn;
