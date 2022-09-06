import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="content">
            <div className="subtitle">
              <h1>{data.name}</h1>
              <button className="remove-toggle" aria-label="Cerrar pokemon">
                Ocultar
              </button>
            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
            <div className="abilities">
              {data.abilities.map((poke) => {
                return (
                  <>
                    <div className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              {data.stats.map((poke) => {
                return (
                  <>
                    <h3 className="stats-style">
                      {poke.stat.name}: {poke.base_stat}
                    </h3>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
