"use client";

import { FC } from "react";
import { AiComponentProps } from "../base/ai-component-props";
import PricingCard, { Tier } from "./pricing-card";

interface BillingViewProps extends AiComponentProps {
  tiers: Array<Tier>
  onCheckout: (priceId: string) => Promise<void>;
}

const BillingView: FC<BillingViewProps> = ({ tiers, onCheckout }) => {
  return (
    <div className={"flex items center justify-center flex-row"}>
      {tiers.map((tier, index) => (
        <PricingCard
          key={index}
          tier={tier}
          onSubscribe={async () => {
            await onCheckout(tier.price.id);
          }}
        />
      ))}
    </div>
  );
};

export default BillingView;
