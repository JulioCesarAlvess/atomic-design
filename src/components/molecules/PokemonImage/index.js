import { image } from "@poc/constants/pokemon";
import Image from "next/image";

export const PokemonImage = () => (
  <div className="w-full flex justify-center">
    <Image src={image} width={300} height={300} />
  </div>
);
