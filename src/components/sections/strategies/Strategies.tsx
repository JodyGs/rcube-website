import React from "react";
import StrategySection from "./StrategySection";
import { CATEGORIES } from "~/utils/categories";

export default function Strategies() {
  return (
    <>
      {CATEGORIES.map((cat, index) => (
        <StrategySection key={cat.title} title={cat.title} cards={cat.cards} />
      ))}
    </>
  );
}
