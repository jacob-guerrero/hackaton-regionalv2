import { LandingMarquee } from "@/components/landing/LandingMarquee";
import { LandingShowcase } from "@/components/landing/showcase/LandingShowcase";
import Image from "../shared/Image";

export default function Monetize() {
  return (
    <>
      <LandingShowcase
        titleComponent={
          <>
            <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
              Disfruta
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
              Comparte la felicidad con tus seres queridos
            </h2>
          </>
        }
        description="“La riqueza no se mide por lo que tienes, sino por lo que compartes.” - Mahatma Gandhi. ¡Compartenos!"
        className="-mb-12"
      />

      <LandingMarquee animationDurationInSeconds={100} className="max-h-58">
        <Image
          src="src/assets/imgs/imgfin1.jpeg"
          alt="Screenshot of the product"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src="src/assets/imgs/imgfin2.jpeg"
          alt="Screenshot of the product"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src="src/assets/imgs/imgfin3.jpeg"
          alt="Screenshot of the product"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src="src/assets/imgs/imgfin4.jpeg"
          alt="Screenshot of the product"
          className="object-cover mx-4"
          width={300}
          height={300}
        />
      </LandingMarquee>

      <LandingMarquee
        animationDurationInSeconds={110}
        animationDirection="left"
        className="max-h-58"
      >
        <Image
          src="src/assets/imgs/imgend1.jpeg"
          alt="Screenshot of the product"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src="src/assets/imgs/imgend2.jpeg"
          alt="Screenshot of the product"
          className="object-cover mx-4"
          width={300}
          height={300}
        />

        <Image
          src="src/assets/imgs/imgend3.jpeg"
          alt="Screenshot of the product"
          className="object-cover mx-4"
          width={300}
          height={300}
        />
      </LandingMarquee>
    </>
  );
}
