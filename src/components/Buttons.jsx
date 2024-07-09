import React from "react";

function Button({title, color, text, border}) {
    return <button className="p-3  rounded-md font-bold mr-4" style={{backgroundColor:color, color:text, border:border}}>{title}</button>
}
export default Button