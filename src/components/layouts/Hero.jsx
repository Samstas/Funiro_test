import { Slider } from "../ui/hero/Slider";
import { TwoBackgroundBlocks } from "../ui/TwoBackgroundBlocks";

export function Hero() {
  return (
    <section className="relative flex v">
      <TwoBackgroundBlocks />

      <Slider />
    </section>
  );
}
