"use client";

import React from "react";

type Props = {
  onPayment(id: string): void;
  products: any[];
  tier: string;
};

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SubscriptionCard = ({ onPayment, products, tier }: Props) => {
  return (
    <section className="flex w-full justify-center md:flex-row flex-col gap-6">
      SubscriptionCard
    </section>
  );
};
