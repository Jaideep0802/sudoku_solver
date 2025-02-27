import React from "react";

function Cell({ value, onChange }) {
    const handleChange = (e) => {
        const input = e.target.value;
        if (/^[1-9]?$/.test(input)) {
            onChange(input);
        }
    };

    return (
        <div className="Cell flex select-none items-center justify-center cursor-pointer bg-[#89AC46] w-full h-full rounded-md text-white outline outline-2 outline-[#89AC46] hover:outline-white transition-all duration-10">
            <input
                type="text"
                value={value || ""}
                onChange={handleChange}
                maxLength="1"
                className="w-full h-full text-center text-4xl font-bold bg-transparent text-[#FF8989] focus:outline-none focus:bg-white focus:text-[#FF8989]"
            />
        </div>
    );
}

export default Cell;
