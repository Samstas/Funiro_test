import { Slider } from "../ui/tipsAndTricks/Slider";
import { SectionHeading } from "../ui/SectionHeading";

export function TipsAndTricks() {
  return (
    <section className="flex items-center flex-col">
      <SectionHeading>Tips & Tricks</SectionHeading>

      <Slider />
    </section>
  );
}
