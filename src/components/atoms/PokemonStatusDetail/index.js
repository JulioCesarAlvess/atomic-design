export const PokemonStatusDetail = ({ name, status, index }) => (
  <div key={`pokemon-status-${index}-${name}-${status}`}>
    <div
      className={`flex justify-between rounded-3xl p-4 ${
        index % 2 === 0 ? "bg-gray-100" : "bg-white"
      }`}
    >
      <p className="text-3xl">{name}</p>
      <p className="text-3xl">{status}</p>
    </div>
  </div>
);
