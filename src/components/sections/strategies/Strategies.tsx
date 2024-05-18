import React from "react";
import { CategoryProps } from "./Card";
import StrategySection from "./StrategySection";

const CATEGORIES: CategoryProps[] = [
  {
    title: "Category",
    cards: [
      {
        strategyName: "Rcube Multi Strategies",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
      {
        strategyName: "SWARM",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
      {
        strategyName: "RGCSM",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
      {
        strategyName: "RGPHP",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
    ],
  },
  {
    title: "Category",
    cards: [
      {
        strategyName: "Aquanthus",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
      {
        strategyName: "NERTHUS",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
    ],
  },
  {
    title: "Category",
    cards: [
      {
        strategyName: "CCF",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
      {
        strategyName: "RDMS",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
      {
        strategyName: "BLACKBIRD",
        description:
          "Lorem ipsum dolor sit amet consectetur. Enim consequat est suspendisse porttitor mattis sed quis. Diam elementum ipsum.",
      },
    ],
  },
];

export default function Strategies() {
  return (
    <>
      {CATEGORIES.map((cat, index) => (
        <StrategySection key={cat.title} title={cat.title} cards={cat.cards} />
      ))}
    </>
  );
}
