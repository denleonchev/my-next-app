import { Metadata } from "next";
import { Counter } from "./couner";

export const metadata: Metadata = {
  title: {
    absolute: "Counter",

  },
  description: "Counter page",
};

export default function CounterPage() {
  return <Counter />;
}
