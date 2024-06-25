import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import { nanoid } from 'nanoid'

export default function Card({ datas, list }) {

  const [showModal, setShowModal] = useState(false)

  return (
    <li className="py-3 px-4 border rounded isolate relative overflow-hidden bg-black/20 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
      <div className="text-xl font-bold dark:text-white flex justify-between relative z-20">
        <span>{datas.name.fr}</span>
        <span>#{datas.pokedex_id}</span>
      </div>
      <img src={datas.sprites.regular} alt={datas.name.fr} />
      <div className="bottom flex justify-between items-center mt-6 z-20 relative">
        <div className="types flex justify-start items-center gap-3">
            {datas.types.map(item => (
                <img key={nanoid()} src={item.image} alt={item.name} className="h-[40px]" />
            ))}
        </div>
        <button 
        onClick={() => setShowModal(true)}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 outline-none hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Plus d'infos
        </button>
      </div>

      {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)} cardDatas={datas} pokeList={list} />, document.body)}

    </li>
  );
}
