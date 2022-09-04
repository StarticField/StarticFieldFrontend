import React from "react";
import { Button, useTheme } from "@nextui-org/react";
import confetti from "canvas-confetti";

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  };

  const { theme } = useTheme();
  return (
    <Button
      auto
      rounded
      ripple={true}
      size="xxl"
      onClick={handleConfetti}
      css={{
        background: theme.colors.primary,
        fontWeight: "$semibold",
        boxShadow: "$md",
        position: "relative",
        overflow: "visible",
        color: "#fff",
        px: "2vw",
        height: "6vh",
        "&:after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          background: theme.colors.primary,
          opacity: 1,
          borderRadius: "$pill",
          transition: "all 0.4s ease",
        },
        "&:hover": {
          transform: "translateY(-5px)",
          "&:after": {
            transform: "scaleX(1.5) scaleY(1.6)",
            opacity: 0,
          },
        },
        "&:active": {
          transform: "translateY(-2px)",
        },
      }}
    >
      Get Started !!
    </Button>
  );
};

export default CustomButton;
