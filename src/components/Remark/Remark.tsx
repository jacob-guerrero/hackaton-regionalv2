import { LandingMarquee } from "@/components/landing/LandingMarquee";
import { LandingTestimonialInline } from "@/components/landing/testimonial/LandingTestimonialInline";
import { LandingTestimonialInlineItem } from "@/components/landing/testimonial/LandingTestimonialInlineItem";

import {
  CreditCardIcon,
  WalletCards,
  HandCoins,
  CircleDollarSign,
  Handshake,
  BookOpen,
  PiggyBank,
} from "lucide-react";

export default function Remark() {
  return (
    <>
      <LandingMarquee withBackground>
        <HandCoins className="w-12 h-12 mx-8" />
        <CreditCardIcon className="w-12 h-12 mx-8" />
        <Handshake className="w-12 h-12 mx-8" />
        <BookOpen className="w-12 h-12 mx-8" />
        <CircleDollarSign className="w-12 h-12 mx-8" />
        <WalletCards className="w-12 h-12 mx-8" />
        <PiggyBank className="w-12 h-12 mx-8" />
      </LandingMarquee>

      <LandingTestimonialInline>
        <LandingTestimonialInlineItem
          name="Pedro Ramírez"
          text="He acumulado muchos puntos solo por mantener mis pagos al día. ¡Ya los canjeé TODOS!"
          suffix="Miembro de TalentoTech"
        />

        <LandingTestimonialInlineItem
          name="Alvaro Hernandez"
          text="Asistir a los programas educativos ha sido muy útil. Además, ¡gané algunos descuentos!"
        />

        <LandingTestimonialInlineItem
          name="Diego Melo"
          text="Actualicé mis datos y participé en las elecciones. ¡Voy por más puntos!"
          suffix="Asociado de COACREMAT"
        />

        <LandingTestimonialInlineItem
          name="Jacob Guerrero"
          text="Pude acceder a mejores beneficios financieros gracias a mi participación activa."
          suffix="Miembro desde 2018"
        />
      </LandingTestimonialInline>
    </>
  );
}
