import { Button } from "@/components/shared/ui/button";

import { LandingProductFeature } from "@/components/landing/LandingProductFeature";
import { LandingProductFeatureKeyPoints } from "@/components/landing/LandingProductFeatureKeyPoints";

import assets from "@/assets/imgs/assetsManager";

export default function Advantages() {
  const keyPoints = [
    {
      title: "Rápido",
      description:
        "Acumula puntos fácilmente por actualizar tus datos o participar en elecciones.",
    },
    {
      title: "Eficiente",
      description:
        "Realiza pagos puntuales y gana puntos que puedes canjear por premios.",
    },
    {
      title: "Educativo",
      description:
        "Asiste a programas educativos y obtén recompensas adicionales.",
    },
  ];
  const keyPoints2 = [
    {
      title: "Recompensas",
      description:
        "Canjea tus puntos por descuentos o beneficios dentro de la cooperativa.",
    },
    {
      title: "Escalable",
      description: "Participa más y accede a mejores beneficios a largo plazo.",
    },
    {
      title: "Compartido",
      description:
        "Forma parte de una comunidad activa y recibe recomendaciones personalizadas.",
    },
  ];

  return (
    <>
      <LandingProductFeature
        titleComponent={
          <>
            <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
              Participa
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
              Gana puntos por cada acción y canjea premios
            </h2>
          </>
        }
        descriptionComponent={
          <>
            <p>
              Al participar en los servicios y actividades de COACREMAT, puedes
              acumular puntos que luego podrás canjear por grandes recompensas.
              Desde actualizaciones de datos hasta asistencia a programas
              educativos, cada acción cuenta para obtener beneficios.
            </p>

            <LandingProductFeatureKeyPoints
              variant="secondary"
              keyPoints={keyPoints}
              className="mt-4"
            />

            <Button className="mt-8" variant="secondary" asChild>
              <a href="#">¡Empezar a ganar puntos!</a>
            </Button>
          </>
        }
        imageSrc={assets.img1}
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        zoomOnHover={false}
        withBackground
        variant="secondary"
      />

      <LandingProductFeature
        titleComponent={
          <>
            <p className="text-xl font-cursive font-semibold tracking-wider bg-clip-text bg-gradient-to-r text-transparent from-pink-500 via-pink-400 to-pink-500">
              Canjea
            </p>

            <h2 className="text-4xl font-semibold leading-tight">
              Disfruta de los beneficios que has ganado
            </h2>
          </>
        }
        descriptionComponent={
          <>
            <p>
              Alcanza recompensas a medida que acumulas más puntos. Canjea tus
              puntos por descuentos en productos financieros, acceso a eventos
              exclusivos o materiales educativos. ¡Cada acción cuenta!
            </p>
            <LandingProductFeatureKeyPoints
              variant="secondary"
              keyPoints={keyPoints2}
              className="mt-4"
            />
            <Button className="mt-8" variant="secondary" asChild>
              <a href="#">¡Canjea tus puntos hoy mismo!</a>
            </Button>
          </>
        }
        imageSrc={assets.img2}
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="none"
        zoomOnHover={false}
        withBackground
        variant="secondary"
      />
    </>
  );
}
