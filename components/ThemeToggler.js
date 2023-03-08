import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaLightbulb, FaMoon } from "react-icons/fa";
import React from "react";

function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <FaMoon /> : <FaLightbulb />}
      onClick={toggleColorMode}
    />
  );
}

export default ThemeToggler;
