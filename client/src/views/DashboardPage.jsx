import React, {useState} from 'react'
import AllBubbles from '../components/Bubble/AllBubbles'
import axios from 'axios';
import './DashboardPage.css';

const DashboardPage = (props) => {
    const[enteredLabel, setEnteredLabel] = useState("");
    const[enteredPriority, setEnteredPriority] = useState("Low");
    const[enteredDescription, setEnteredDescription] = useState("")
    const[enteredStartDate, setEnteredStartDate] = useState(new Date());
    const[enteredEndDate, setEnteredEndDate] = useState(new Date());
    const[enteredIsExpense, setEnteredIsExpense] = useState(false);
    const[enteredCost, setEnteredCost] = useState(0);
    const[errors, setErrors] = useState([]);

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
                console.log("chicken")
            })
            .catch (err => {
                const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            }, [props.formSubmitted])
            setErrors([])
            setEnteredDescription("");
            setEnteredLabel("");
            setEnteredPriority("Low")
            setEnteredCost(0);
        }
    
    return (
        <div>
            <div className="create-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        {
                            errors?
                        <div className="errors">
                        {errors.map((err, index) => <div key={index}>{err}</div>)}
                        </div>: ""
                        }
                        <div className="form-section">
                            <label>*Label:</label>
                            <input className="input" type="text" name="name" id="" className="form-control" value={enteredLabel} onChange={e=>setEnteredLabel(e.target.value)} />
                        </div>
                        <div className="form-section">
                            <label>Priority:</label><br />
                            <select className="input" onChange={e=>setEnteredPriority(e.target.value)}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                            {   
                                enteredIsExpense === false?
                                <div>
                                    <label className='input'> Is this an expense?</label>
                                    <input type="checkbox" name="enteredIsExpense" checked={enteredIsExpense} onChange={e=>setEnteredIsExpense(!enteredIsExpense)} />
                                </div>:
                                <div>
                                    <label className='input'> Cost: </label>
                                    <input type="number" className="input" name="cost" value={enteredCost} onChange={e=>setEnteredCost(e.target.value)} />
                                    <label className='input'> Not an expense</label>
                                    <input type="checkbox" name="enteredIsExpense" checked={enteredIsExpense} onChange={e=>setEnteredIsExpense(!enteredIsExpense)} />
                                </div>

                            }
                        </div>
                        <div className="form-section">
                            <label>Description:</label>
                            <textarea className="input" name="description" cols="55" rows="10" value={enteredDescription} onChange={e=>setEnteredDescription(e.target.value)} />
                        </div>
                        <div className="form-section form-section__date">
                            <label>Start Date</label>
                            <input className="input" type="date"  value={enteredStartDate} onChange={e => setEnteredStartDate(e.target.value)} />
                            <label className="input">End Date</label>
                            <input className="input" type="date"  value={enteredEndDate} onChange={e => setEnteredEndDate(e.target.value)} />
                        </div>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            </div>
            <AllBubbles formSubmitted={props.formSubmitted}/>
        </div>
    )
}

export default DashboardPage
