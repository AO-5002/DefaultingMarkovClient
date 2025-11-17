import ColorText from "@/components/ColorText";

function Hero() {
  return (
    <div className="border w-full h-full flex justify-center items-center">
      <span className="w-full flex flex-col justify-start">
        <h1 className="text-5xl font-bold font-mono">
          Customize <br /> Learn & <br />
        </h1>
        <ColorText>
          <h1 className="text-5xl font-mono">Test</h1>
        </ColorText>
      </span>
    </div>
  );
}

export { Hero };
