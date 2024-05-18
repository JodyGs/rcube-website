import Image from "next/image";
import React from "react";
import Button from "~/components/buttons/Button";
import SectionHeading from "~/components/headings/SectionHeading";
import { Arrow } from "~/svgs";

export default function OurTeam() {
  return (
    <section className="grid16 col-span-full col-start-2 col-end-18 py-40">
      <div className="col-span-5 space-y-10">
        <SectionHeading
          className="space-y-10"
          title="Our team"
          description="Lorem ipsum dolor sit amet consectetur. Cras viverra in nunc interdum arcu nunc."
        />
        <div className="ml-0 space-x-4">
          <Button variant="secondary" size="small">
            <Arrow className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="small">
            <Arrow className="h-4 w-4 rotate-180" />
          </Button>
        </div>
        <Button variant="secondary" size="medium">
          Contact us
        </Button>
      </div>
      <div className="col-span-11 bg-red-300">
        <div className="group relative h-[552px] w-[384px] bg-gray-600 hover:bg-gray-200">
          <Image
            fill
            placeholder="blur"
            blurDataURL="/Img/OurTeam/Cyril_Castelli-placeholder.webp"
            className="max-h-[416px] max-w-[100%] object-cover"
            src={"/Img/OurTeam/Cyril_Castelli.webp"}
            alt=""
          />
          <div className="absolute bottom-0 w-full space-y-2 bg-gray-600 px-10 py-8">
            <h4 className="text-2xl font-bold">Cyril Castelli</h4>
            <p className="font-inter text-xl text-gray-200 transition-colors group-hover:text-custom-gold-400">
              Founder & CEO
            </p>
            <p className="invisible h-0 text-gray-100 opacity-0 transition-opacity duration-700 group-hover:visible group-hover:h-auto group-hover:opacity-100 ">
              Prior to founding Rcube Asset Management in 2013, Cyril launched a
              global macro research boutique (Rcube) in 2011 where he advised
              some of the largest global macro hedge funds globally on tactical
              asset allocation. Prior to that he was head of Macro research &
              sales at Louis Capital Markets in London. Before that Cyril was
              head of asset allocation at ADI a large french hedge fund group
              (8bln AUM). Between 1994 and 2000 cyril held various senior
              positions at AIG Trading and Finacor Vendôme (Chicago, New York &
              London).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
