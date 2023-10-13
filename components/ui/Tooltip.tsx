import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  children: ReactNode;
  content: string;
  width: number;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
                position: 'absolute',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                textAlign: "center",
                fontSize: "1.5em",
                width: `${width}rem`,
                height: "auto",
                padding: '8px',
                borderRadius: '4px',
                top: 'auto',  
                left: "50%",
                bottom: '120%',  
                marginLeft: `-${width/2}rem`,
                zIndex: 999,
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
