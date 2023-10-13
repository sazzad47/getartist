import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DropdownProps {
  label: string;
  children: React.ReactNode;
  shown: boolean;
  setShown: (value: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ shown, setShown, label, children }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    }
  };

  const toggleMenu = () => {
    setShown(!shown);
  };

  // Add a click event listener to the entire document
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shown) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          // Close the dropdown if the click is outside of it
          setShown(false);
        }
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, [shown]);

  return (
    <div ref={dropdownRef}>
      <span className="cursor-pointer" onClick={toggleMenu}>
        {label}
      </span>
      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="absolute bg-white mt-1 border border-blue-strong border-opacity-50 rounded-sm p-2"
      >
        {children}
      </motion.ul>
    </div>
  );
};

export default Dropdown;
