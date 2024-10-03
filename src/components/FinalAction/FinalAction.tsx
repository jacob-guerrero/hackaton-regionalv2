import { LandingSaleCtaSection } from "@/components/landing/cta/LandingSaleCta";

export default function FinalAction() {
  return (
    <LandingSaleCtaSection
      withBackgroundGlow
      variant="secondary"
      backgroundGlowVariant="secondary"
      title="Ready to get started?"
      description="Pre-order today and get a 50% discount on the final price for the first 3 months. No credit card required."
      ctaHref="https://gum.co/product"
      ctaLabel="Pre-order for $49"
    />
  );
}
