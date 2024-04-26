import React from "react";
import Button from "~/components/buttons/Button";
import { Arrow } from "~/svgs";

export default function HeroStrategy() {
  return (
    <section className="grid16 pb-30 col-span-full col-start-2 col-end-18 pt-8">
      <div className="col-span-full">
        <Button
          variant="back"
          size="back"
          className="flex items-center space-x-4"
        >
          <Arrow className="h-4 w-4" /> <div>back to strategies</div>
        </Button>
      </div>
      <div className="col-span-12 col-start-3 pt-48 text-center">
        <h1 className="font-satoshi text-7xl">Strategy title</h1>
        <p className="mx-auto max-w-[928px] text-xl">
          Lorem ipsum dolor sit amet consectetur. Cum tempus ac vestibulum
          mauris egestas. Odio tempus tellus enim curabitur vitae in enim
          tincidunt. Vitae sed vel fames sollicitudin nisl tristique in.
          Bibendum id est id sed augue faucibus rhoncus malesuada.
        </p>
      </div>
    </section>
  );
}
