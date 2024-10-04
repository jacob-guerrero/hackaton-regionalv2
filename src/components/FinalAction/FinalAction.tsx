import { LandingSaleCtaSection } from "@/components/landing/cta/LandingSaleCta";

export default function FinalAction() {
  return (
    <LandingSaleCtaSection
      withBackgroundGlow
      variant="secondary"
      backgroundGlowVariant="secondary"
      title="¿Estás listo?"
      description="Únete hoy y empieza a ser parte de las personas ganadoras. ¡No lo pienses más!"
      ctaHref="login"
      ctaLabel="Únete Ahora"
    />
  );
}
