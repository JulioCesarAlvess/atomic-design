import { PokemonImage } from "@poc/components/molecules/PokemonImage";
import { PokemonStatus } from "@poc/components/molecules/PokemonStatus";
import { PokemonTitle } from "@poc/components/molecules/PokemonTitle";
import { PokemonTypes } from "@poc/components/molecules/PokemonTypes";

export const PokemonCard = () => (
  <div className="w-[50rem] rounded-xl bg-white border border-black pb-4">
    <PokemonTitle />
    <div className="-mt-[10rem] flex flex-col gap-8">
      <PokemonImage />
      <PokemonTypes />
      <PokemonStatus />
    </div>
  </div>
);
