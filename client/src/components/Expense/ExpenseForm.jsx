import React from 'react'

const ExpenseForm = () => {
    const[enteredLabel, setEnteredLabel] = useState("");
    const[enteredDescription, setEnteredDescription] = useState("")
    const[enteredStartDate, setEnteredStartDate] = useState(new Date());
    const[enteredIsExpense, setEnteredIsExpense] = useState(false);
    const[enteredCost, setEnteredCost] = useState(0);
    const[errors, setErrors] = useState([]);

    const enteredBubbleInfo = {
        label: enteredLabel,
        startDate: enteredStartDate,
        description: enteredDescription,
        isExpense: enteredIsExpense,
        cost: enteredCost,
    }

    const {expandForm} = props
    
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
            }, [props.formSubmitted, expandForm])
            setErrors([])
            setEnteredDescription("");
            setEnteredLabel("");
            setEnteredCost(0);
        }
    return (
        <div className="create-form">
        <form onSubmit={handleSubmit}>
            <div className="form-inputs">
                {
                    errors?
                <div className="errors">
                {errors.map((err, index) => <div key={index}>{err}</div>)}
                </div>: ""
                }
                <div>
                    <label className='input'> Is this an expense?</label>
                    <input type="checkbox" name="enteredIsExpense" checked={enteredIsExpense} onChange={e=>setEnteredIsExpense(!enteredIsExpense)} />
                </div>
                <div className="form-section">
                    <label>*Label:</label>
                    <input className="input" type="text" name="name" id="" value={enteredLabel} onChange={e=>setEnteredLabel(e.target.value)} />
                </div>
                <div className="form-section">
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
                </div>
                <div className="form-section">
                    <label>Description:</label>
                    <textarea className="input" name="description" cols="55" rows="10" value={enteredDescription} onChange={e=>setEnteredDescription(e.target.value)} />
                </div>
                <div className="form-section form-section__date">
                    <label>Date</label>
                    <input className="input" type="date"  value={enteredStartDate} onChange={e => setEnteredStartDate(e.target.value)} />
                </div>
            </div>
            <div className="form-button">
                <input type="submit" value="Submit" className="submit"/>
            </div>
        </form>
    </div>
    )
}

export default CreateBubbleForm
