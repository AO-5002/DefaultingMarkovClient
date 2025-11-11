"use client";
import { NavItem } from "./static";
import { BriefcaseBusiness, ChartColumn } from "lucide-react";

const items: NavItem[] = [
  {
    title: "Portfolio Log",
    icon: <BriefcaseBusiness size={24} />,
  },
  {
    title: "General Analytics",
    icon: <ChartColumn size={24} />,
  },
];

export default items;
