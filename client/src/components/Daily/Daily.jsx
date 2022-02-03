import React, {useState} from 'react'

const Daily = () => {
    const [isOutBed, setIsOutBed] = useState(false);
    const [isTeethBrushed, setIsTeethBrushed] = useState(false);
    const [isApplied, setIsApplied] = useState(false);
    const [isWorkedOut, setIsWorkedOut] = useState(false);
    const [isDrinkingWater, setIsDrinkingWater] = useState(false);
    return (
        <div className="bubble-container border-design bubble-group">
            <div>
                <input type="checkbox" name="isOutBed" checked={isOutBed} onChange={e=>setIsOutBed(!isOutBed)} />
                <label>Got out of bed</label>
            </div>
            <div>
                <input type="checkbox" name="isTeethBrushed" checked={isTeethBrushed} onChange={e=>setIsTeethBrushed(!isTeethBrushed)} />
                <label>Brushed my teeth</label>
            </div>
            <div>
                <input type="checkbox" name="isApplied" checked={isApplied} onChange={e=>setIsApplied(!isApplied)} />
                <label>Applied to jobs</label>
            </div>
            <div>
                <input type="checkbox" name="isWorkedOut" checked={isWorkedOut} onChange={e=>setIsWorkedOut(!isWorkedOut)} />
                <label>Worked out</label>
            </div>
            <div>
                <input type="checkbox" name="isDrinkingWater" checked={isDrinkingWater} onChange={e=>setIsDrinkingWater(!isDrinkingWater)} />
                <label>Drank water</label>
            </div>
        </div>
    )
}

export default Daily

