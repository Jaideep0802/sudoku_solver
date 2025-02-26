import React from "react";
import Cell from "./Cell";

function Square(){
    return (
        <div className="box w-full h-full gap-1 flex flex-col">
            <div className="flex gap-1 w-full h-full">
                <Cell />
                <Cell />
                <Cell />
            </div> 
            <div className="flex gap-1 w-full h-full">
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="flex gap-1 w-full h-full">
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
        
    )
}

export default Square;