import { PokemonTypeBadge } from "@poc/components/atoms/PokemonTypeBadge";
import { types } from "@poc/constants/pokemon";

export const PokemonTypes = () => (
  <div className="w-full flex justify-center gap-2 -mt-4">
    {types.map((type) => (
      <PokemonTypeBadge name={type.name} />
    ))}
  </div>
);
