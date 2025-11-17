import ColorText from "@/components/ColorText";
import { Children } from "@/util/types/Children";
import { LearnMoreBtn } from "./dynamic";

function TextDescription({ children }: Children) {
  return (
    <div className="w-xl text-left">
      <p className="text-zinc-400 font-md text-sm">{children}</p>
    </div>
  );
}

function Heading({ children }: Children) {
  return <h1 className="text-8xl font-bold font-mono">{children}</h1>;
}

function Hero() {
  return (
    <div className=" w-full h-full flex justify-center items-start py-12 gap-12 text-white">
      <div className="w-full flex flex-col justify-start gap-8">
        <div className="w-full flex flex-col justify-start">
          <Heading>
            Customize <br /> Learn & <br />
          </Heading>
          <ColorText>
            <Heading>Test</Heading>
          </ColorText>
        </div>
        <TextDescription>
          Your go-to platform for predicting credit defaults using advanced
          machine learning techniques. Our user-friendly interface allows you to
          easily input financial data and receive accurate predictions, helping
          you make informed decisions about credit risk management.
        </TextDescription>
        <LearnMoreBtn />
      </div>
    </div>
  );
}
export { Hero };
