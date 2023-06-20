import { name, types } from "@poc/constants/pokemon";
import { COLOR_TYPES } from "@poc/utils/colorTypes";

export const PokemonTitle = () => (
  <div className={`h-48 ${COLOR_TYPES[types[0].name]} rounded-t-xl p-8`}>
    <h1 className="text-white font-bold capitalize text-5xl">{name}</h1>
  </div>
);
