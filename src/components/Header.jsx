import { useState } from "react"
import Pokeball from "../assets/pokeball.png"
import Search from "../assets/search.svg"

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="fixed z-[100] top-0 left-0 w-full bg-slate-50 py-5 px-10 flex items-end justify-between">
        <div className="left flex items-end justify-start gap-5">
            <img src={Pokeball} alt="Icon" className="h-[50px]" />
            <div className="text-6xl font-bold flex items-end">Pokédex<span className="text-2xl">v1.0</span></div>
        </div>
        <div className="right flex justify-end items-center">
            <input type="text" className="border border-slate-500 w-[300px] h-[36px] rounded-full bg-slate-50 px-3 flex items-center justify-start" placeholder="Recherche" />
            <img src={Search} alt="Rechercher" className="h-[36px]" />
        </div>
    </div>
  )
}