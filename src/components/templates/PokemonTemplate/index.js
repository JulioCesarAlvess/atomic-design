import { PokemonHead } from "@poc/components/atoms/PokemonHead";
import { PokemonCard } from "@poc/components/organisms/PokemonCard";

export const PokemonTemplate = () => (
  <>
    <PokemonHead />
    <main className="w-full p-4 flex justify-center">
      <PokemonCard />
    </main>
  </>
);
