import { InfoFooter } from "@poc/components/molecules/InfoFooter";
import { OrganizeTemplate } from "@poc/components/templates/OrganizeTemplate";
import Image from "next/image";

export default function Home() {
  return (
    <OrganizeTemplate
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
    />
  );
}
