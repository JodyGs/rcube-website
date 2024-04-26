import React from "react";
import Button from "~/components/buttons/Button";
import SectionHeading from "~/components/headings/SectionHeading";
import { Arrow } from "~/svgs";

export default function ourTeam() {
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
      <div className="col-span-11 bg-red-300"></div>
    </section>
  );
}
