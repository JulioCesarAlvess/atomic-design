import { COLOR_TYPES } from "@poc/utils/colorTypes";
import Head from "next/head";
import Image from "next/image";

const types = [
  {
    name: "grass",
    url: "https://pokeapi.co/api/v2/type/12/",
  },
];
const status = [
  {
    base_stat: 45,
    effort: 0,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/",
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/",
    },
  },
  {
    base_stat: 65,
    effort: 0,
    stat: {
      name: "defense",
      url: "https://pokeapi.co/api/v2/stat/3/",
    },
  },
  {
    base_stat: 49,
    effort: 0,
    stat: {
      name: "special-attack",
      url: "https://pokeapi.co/api/v2/stat/4/",
    },
  },
  {
    base_stat: 65,
    effort: 1,
    stat: {
      name: "special-defense",
      url: "https://pokeapi.co/api/v2/stat/5/",
    },
  },
  {
    base_stat: 45,
    effort: 0,
    stat: {
      name: "speed",
      url: "https://pokeapi.co/api/v2/stat/6/",
    },
  },
];
const name = "chikorita";
const image =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/152.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <main className="w-full p-4 flex justify-center">
        <div className="w-[50rem] rounded-xl bg-white border border-black pb-4">
          <div
            className={`h-48 ${COLOR_TYPES[types[0].name]} rounded-t-xl p-8`}
          >
            <h1 className="text-white font-bold capitalize text-5xl">{name}</h1>
          </div>
          <div className="-mt-[10rem] flex flex-col gap-8">
            <div className="w-full flex justify-center">
              <Image src={image} width={300} height={300} />
            </div>
            <div className="w-full flex justify-center gap-2 -mt-4">
              {types.map((type, index) => (
                <div
                  key={`pokemon-types-${index}-${type.name}`}
                  className={`${
                    COLOR_TYPES[type.name]
                  } rounded-3xl px-4 flex items-center justify-center`}
                >
                  <p className="text-3xl text-white font-bold capitalize">
                    {type.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col px-10">
              {status.map((pokemonStatus, index) => (
                <div
                  key={`pokemon-status-${index}-${pokemonStatus.stat.name}-${pokemonStatus.base_stat}`}
                >
                  <div
                    className={`flex justify-between rounded-3xl p-4 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <p className="text-3xl">{pokemonStatus.stat.name}</p>
                    <p className="text-3xl">{pokemonStatus.base_stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
