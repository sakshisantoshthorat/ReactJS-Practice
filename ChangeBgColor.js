import React, { useState } from 'react'

function ChangeBgColor() {
    const [color, setColor] = useState("");

    return (
        <div style={{ backgroundColor: color, height: "400px",width:"1200px", justifySelf: "center", padding: "160px"}}>
            <h2>Handle Input By Changing Bg Color</h2>
            <input type='text' placeholder='Enter any Color..'
                value={color} onChange={(e) => setColor(e.target.value)} style={{ padding: "8px" }} />
        </div>
    )
}

export default ChangeBgColor
