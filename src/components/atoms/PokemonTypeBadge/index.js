import { COLOR_TYPES } from "@poc/utils/colorTypes";

export const PokemonTypeBadge = ({ name }) => (
  <div
    key={`pokemon-types-${name}`}
    className={`${COLOR_TYPES[name]} rounded-3xl px-4 flex items-center justify-center`}
  >
    <p className="text-3xl text-white font-bold capitalize">{name}</p>
  </div>
);
