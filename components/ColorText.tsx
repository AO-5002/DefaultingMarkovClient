import GradientText from "./GradientText";
import { Children } from "@/util/types/Children";

// For a smoother animation, the gradient should start and end with the same color

interface ColorTextProps extends Children {
  colors?: string[];
}

function ColorText({ children, colors }: ColorTextProps) {
  return (
    <GradientText
      colors={colors || ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={1}
      showBorder={false}
      className="custom-class"
    >
      {children}
    </GradientText>
  );
}

export default ColorText;
