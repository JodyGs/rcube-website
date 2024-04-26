import Herobanner from "~/components/sections/hero/Herobanner";
import OurTeam from "~/components/sections/ourTeam/OurTeam";
import Strategies from "~/components/sections/strategies/Strategies";

export default function HomePage() {
  return (
    <>
      <Herobanner />
      <Strategies />
      <OurTeam />
    </>
  );
}
