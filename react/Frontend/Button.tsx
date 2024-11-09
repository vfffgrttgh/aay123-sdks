export default function Button({type, id, onClick, children}: any) {
    if(type === "blue") {
        return <button id={id} onClick={onClick} className="bg-blue-500 p-3 rounded-xl w-fit h-fit border-none font-sans font-semibold text-white hover:bg-blue-700 m-3" style={{ transition: "1s background-color"}}>{children}</button>
    }

    if(type === "red") {
        return <button id={id} onClick={onClick} className="bg-red-500 p-3 rounded-xl w-fit h-fit border-none font-sans font-semibold text-white hover:bg-red-700 m-3" style={{ transition: "1s background-color"}}>{children}</button>
    }

    if(type === "green") {
        return <button id={id} onClick={onClick} className="bg-green-500 p-3 rounded-xl w-fit h-fit border-none font-sans font-semibold text-white hover:bg-green-700 m-3" style={{ transition: "1s background-color"}}>{children}</button>
    }

    if(type === "yellow") {
        return <button id={id} onClick={onClick} className="bg-yellow-500 p-3 rounded-xl w-fit h-fit border-none font-sans font-semibold text-white hover:bg-yellow-700 m-3" style={{ transition: "1s background-color"}}>{children}</button>
    }

    if(type === "purple") {
        return <button id={id} onClick={onClick} className="bg-purple-500 p-3 rounded-xl w-fit h-fit border-none font-sans font-semibold text-white hover:bg-purple-700 m-3" style={{ transition: "1s background-color"}}>{children}</button>
    }

    if(type === "pink") {
        return <button id={id} onClick={onClick} className="bg-pink-500 p-3 rounded-xl w-fit h-fit border-none font-sans font-semibold text-white hover:bg-pink-700 m-3" style={{ transition: "1s background-color"}}>{children}</button>
    }

    if(type === "dark") {
        return <button id={id} onClick={onClick} className="bg-slate-700 p-3 rounded-xl w-fit h-fit border-none font-sans font-semibold text-white hover:bg-slate-900 m-3" style={{ transition: "1s background-color"}}>{children}</button>
    }
}
