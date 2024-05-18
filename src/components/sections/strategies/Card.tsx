import React from "react";

export type CardProps = {
  strategyName: string;
  description: string;
};
export type CategoryProps = {
  title: string;
  cards: CardProps[];
};

export default function Card({ strategyName, description }: CardProps) {
  return (
    <div className="bg-custom-grey-700">
      <div className="min-h-[240px]"></div>
      <div className="space-y-4 bg-custom-grey-500 p-8">
        <h3 className="text-xl leading-8">{strategyName}</h3>
        <p className="leading-6 text-custom-grey-200">{description}</p>
      </div>
    </div>
  );
}
