import { PokemonStatusDetail } from "@poc/components/atoms/PokemonStatusDetail";
import { status } from "@poc/constants/pokemon";

export const PokemonStatus = () => (
  <div className="w-full flex flex-col px-10">
    {status.map((pokemonStatus, index) => (
      <PokemonStatusDetail
        index={index}
        name={pokemonStatus.stat.name}
        status={pokemonStatus.base_stat}
      />
    ))}
  </div>
);
