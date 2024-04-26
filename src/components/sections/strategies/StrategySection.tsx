import React from "react";
import Card, { CardProps } from "./Card";

type StrategySectionProps = {
  title: string;
  cards: CardProps[];
};

export default function StrategySection({
  title,
  cards,
}: StrategySectionProps) {
  return (
    <section className="grid16 col-span-full col-start-2 col-end-18 mb-[72px] gap-x-4 gap-y-8">
      <h3 className="col-span-full font-satoshi uppercase">{title}</h3>
      <div className="col-span-full col-start-1 col-end-17 grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
