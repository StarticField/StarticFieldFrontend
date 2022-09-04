import React from "react";
import { Button, useTheme } from "@nextui-org/react";
import confetti from "canvas-confetti";

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({});
  };

  const theme = useTheme();

  return (
    <Button
      auto
      rounded
      ripple={false}
      size="xl"
      onClick={handleConfetti}
      css={{
        background: "theme.primary",
        fontWeight: "$semibold",
        boxShadow: "$md",
        position: "relative",
        overflow: "visible",
        color: "#0F9549",
        px: "$18",
        "&:after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "purple",
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
      Click me
    </Button>
  );
};

export default CustomButton;
