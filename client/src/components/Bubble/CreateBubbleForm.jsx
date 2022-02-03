import React, {useState} from 'react'
import axios from 'axios';

const CreateBubbleForm = (props) => {
    const[enteredLabel, setEnteredLabel] = useState("");
    const[enteredPriority, setEnteredPriority] = useState("Low");
    const[enteredDescription, setEnteredDescription] = useState("")
    const[enteredStartDate, setEnteredStartDate] = useState(new Date());
    const[enteredEndDate, setEnteredEndDate] = useState(new Date());
    const[enteredIsExpense, setEnteredIsExpense] = useState(false);
    const[enteredCost, setEnteredCost] = useState(0);
    const[errors, setErrors] = useState([]);
    
    const {expandForm} = props

    const enteredBubbleInfo = {
        label: enteredLabel,
        priority: enteredPriority,
        startDate: enteredStartDate,
        endDate: enteredEndDate,
        description: enteredDescription,
        isExpense: enteredIsExpense,
        cost: enteredCost,
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/bubbles", enteredBubbleInfo)
            .then(res => {
                props.setFormSubmitted(!props.formSubmitted)
            })
            .catch (err => {
                const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            }, [props.formSubmitted, expandForm])
            setErrors([])
            setEnteredDescription("");
            setEnteredLabel("");
            setEnteredCost(0);
        }
    return (
        <div className="create-form">
            <form onSubmit={handleSubmit}>
                <div className="form-inputs bubble-container bubble-group">
                                                    {/*               form errors                */}
                    {                                               
                        errors?
                            <div className="errors">     {errors.map((err, index) => <div key={index}>{err}     </div>)}
                            </div>: ""
                    }

                                                    {/*               form inputs                */}
                    
                    <div style={{marginBottom: "20px"}}>
                        <label className='input'> Is this an expense?</label>
                        <input type="checkbox" name="enteredIsExpense" checked={enteredIsExpense} onChange={e=>setEnteredIsExpense(!enteredIsExpense)} />
                    </div>
                    
                    
                    <div className="form-section">
                        <label>*Label:</label>
                        <input className="input" type="text" name="name" id="" value={enteredLabel} onChange={e=>setEnteredLabel(e.target.value)} />
                    </div>
                    
                                                    {/*         cost vs priority controls          */}
                    <div className="form-section">
                        {
                            enteredIsExpense === false && 
                        <div>
                            <label>Priority:</label>
                            <select style={{width:"200px", height:"30px"}} className="input" onChange={e=>setEnteredPriority(e.target.value)}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        }
                        {   
                            enteredIsExpense === true &&
                            <div>
                                <label> Cost: </label>
                                <input style={{width:"200px", height:"30px"}} type="number" className="input" name="cost" value={enteredCost} onChange={e=>setEnteredCost(e.target.value)} />
                            </div>
                        }
                    </div>
                    
                    
                    <div className="form-section">
                        <label>Description:</label>
                        <textarea className="input" name="description" cols="55" rows="10" value={enteredDescription} onChange={e=>setEnteredDescription(e.target.value)} />
                    </div>
                    
                                                        {/*               dates                */}
                    <div className="form-section form-section__date">
                        <label>Start Date</label>
                        <input className="input" type="date"  value={enteredStartDate} onChange={e => setEnteredStartDate(e.target.value)} />
                        {
                            enteredIsExpense === false &&
                        <div>
                            <label className="input">End Date</label>
                            <input className="input" type="date"  value={enteredEndDate} onChange={e => setEnteredEndDate(e.target.value)} />
                        </div>
                        }
                        </div>
                </div>
                
                                                         {/*              submit                */}
                <div className="form-button">
                    <input type="submit" value="Submit" id="pulse" className="submit"/>
                </div>
            </form>
        </div>
    )
}

export default CreateBubbleForm
