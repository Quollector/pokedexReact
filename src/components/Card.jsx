import { createPortal } from "react-dom";

export default function Card({datas}) {
    console.log(datas);
  return (
    <li className="py-3 px-4 border rounded bg-slate-500">
        <h2 className="text-slate-50 font-bold flex justify-between"><span>{datas.name.fr}</span><span>#{datas.pokedex_id}</span></h2>
        <img src={datas.sprites.regular} alt={datas.name.fr} />
        <button className="block mx-auto bg-slate-200 text-slate-900 py-2 px-2 rounded mt-6 hover:bg-slate-400 hover:text-slate-100 transition-colors">Plus d'infos</button>
    </li>
  )
}