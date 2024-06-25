import { nanoid } from "nanoid";
import { useState } from "react";

export default function ModalContent({ closeModal, cardDatas, pokeList }) {

  const [pokeDatas, setPokeDatas] = useState(cardDatas)

  function changePoke(e, id){
    e.preventDefault();
    
    setPokeDatas(pokeList.find(obj => obj.pokedex_id === id))
  }

  return (
    <div onClick={closeModal} className="w-full h-full fixed top-0 left-0 bg-slate-800/75 z-50 flex items-center justify-center">
      <div className="card relative bg-slate-50 p-12 rounded min-w-[500px]" onClick={e => e.stopPropagation()}>
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center items-center"
        >
          X
        </button>
        <div className="content flex flex-wrap gap-y-10 gap-x-5">
          <div className="head flex align-center justify-between w-full">
            <h2 className="text-xl font-bold">{pokeDatas.name.fr}</h2>

            <div className="details flex align-center gap-2">
              {pokeDatas.types.map((item) => (
                <img
                  key={nanoid()}
                  className="h-8"
                  src={item.image}
                  alt={item.name}
                />
              ))}
              <h2 className="text-xl font-bold ml-8">
                #{pokeDatas.pokedex_id}
              </h2>
            </div>
          </div>

          <div className="informations grow">
            <div className="category mb-4 flex">
              <h3 className="text-l font-bold w-1/2">Catégorie:</h3>
              <p className="w-1/2">{pokeDatas.category}</p>
            </div>

            <div className="egg-group mb-4 flex">
              <h3 className="text-l font-bold w-1/2">Groupe(s) d'oeuf:</h3>
              <p className="w-1/2">
                {pokeDatas.egg_groups.map((str, index) => (
                  <span key={nanoid()}>
                    {index != 0 ? ", " : ""}
                    {str}
                  </span>
                ))}
              </p>
            </div>

            <h3 className="text-l font-bold mb-2">Statistiques:</h3>

            <div className="stats grid grid-cols-2 gap-y-1 gap-x-3 mb-4">
              <h3 className="text-sm font-bold">Attaque:</h3>
              <p className="text-sm">{pokeDatas.stats.atk}</p>
              <h3 className="text-sm font-bold">Défense:</h3>
              <p className="text-sm">{pokeDatas.stats.def}</p>
              <h3 className="text-sm font-bold">Points de vie:</h3>
              <p className="text-sm">{pokeDatas.stats.hp}</p>
              <h3 className="text-sm font-bold">Attaque spéciale:</h3>
              <p className="text-sm">{pokeDatas.stats.spe_atk}</p>
              <h3 className="text-sm font-bold">Défense spéciale:</h3>
              <p className="text-sm">{pokeDatas.stats.spe_def}</p>
              <h3 className="text-sm font-bold">Vitesse:</h3>
              <p className="text-sm">{pokeDatas.stats.vit}</p>
            </div>

            <div className="evolutions mb-4 flex">
              <h3 className="text-l font-bold w-1/2">Évolutions:</h3>
              <div className="w-1/2">
                {pokeDatas.evolution.pre &&
                  <div className="pre">

                      <p className="text-sm font-bold">Précédente(s):</p>
                    {pokeDatas.evolution.pre.map(item => (
                      <p key={nanoid()}>
                          <span onClick={e => (changePoke(e, item.pokedex_id))} className="font-bold cursor-pointer">{item.name + " (#" + item.pokedex_id + ")" }</span>, {item.condition}
                      </p>
                    ))}
                  </div>
                }
                {pokeDatas.evolution.next &&
                  <div className="next mt-2">
                      <p className="text-sm font-bold">Suivante(s):</p>
                    {pokeDatas.evolution.next.map(item => (
                      <p key={nanoid()}>
                          <span onClick={e => (changePoke(e, item.pokedex_id))} className="font-bold cursor-pointer">{item.name + " (#" + item.pokedex_id + ")" }</span>, {item.condition}
                      </p>
                    ))}
                  </div>
                }
                {(!pokeDatas.evolution.pre && !pokeDatas.evolution.next) &&
                  <p>Aucune</p>
                }
              </div>
            </div>

          </div>

          <div className="image w-2/5">
            <img
              className="block w-full"
              src={pokeDatas.sprites.regular}
              alt={pokeDatas.name.fr}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
