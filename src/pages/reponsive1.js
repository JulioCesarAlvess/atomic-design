import { InfoFooter } from "@poc/components/molecules/InfoFooter";
import { ResponsiveTemplate } from "@poc/components/templates/ResponsiveTemplate";
import Image from "next/image";

const childrens = [
  <Image src={"/images/foto1.webp"} width={280} height={200} />,
  <Image src={"/images/foto2.webp"} width={280} height={200} />,
  <Image src={"/images/foto3.webp"} width={280} height={200} />,
  <Image src={"/images/foto4.webp"} width={280} height={200} />,
];

export default function Home() {
  return (
    /*  <OrganizeTemplate
      footer={
        <InfoFooter
          email={"julio@gmail.com"}
          instagran={"julio@intagran"}
          phoneNumber={"11 93031-6346"}
        />
      }
      leftChildren={
        <Image src="/images/apartamento.webp" width={600} height={300} />
      }
      rightChildren={
        <Image src="/images/apartamento2.webp" width={600} height={300} />
      }
      title={"O Apartamento dos sonhos"}
    /> */
    <ResponsiveTemplate
      childrens={childrens}
      mainChildren={<Image src="/images/foto5.webp" width={600} height={300} />}
      title="Escolha o melhor quarto"
      footer={
        <InfoFooter
          email={"julio@gmail.com"}
          instagran={"julio@intagran"}
          phoneNumber={"11 93031-6346"}
        />
      }
      header={<p>Viagem dos sonhos</p>}
    />
  );
}
