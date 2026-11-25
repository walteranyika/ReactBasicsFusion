import {useState} from "react";

export default function MyForm() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState("");
    const [flag, setFlag] = useState(false);


    function handleWeightChange(e) {
        setWeight(e.target.value);
    }

    function handleHeightChange(e) {
        setHeight(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        let result = weight / height ** 2
        result = Math.round(result * 100) / 100 //45.789
        setBmi(result)
        if (result < 18.5) {
            setCategory("Underweight")
            setFlag(true);
        } else if (result >= 18.5 && result < 25) {
            setCategory("Normal")
            setFlag(false);
        } else if (result >= 25 && result < 30) {
            setCategory("Overweight")
            setFlag(true);
        } else if (result >= 30 && result < 35) {
            setCategory("Obese Class 1")
            setFlag(true);
        } else if (result >= 35 && result < 40) {
            setCategory("Obese Class 2")
            setFlag(true);
        } else {
            setCategory("Obese Class 3")
            setFlag(true);
        }
    }

    let color = flag ? "text-danger" : "text-success"; //tenary

    return (<div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 border mt-4 p-3">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleWeightChange} type="number" step="0.01" className="form-control mb-3"
                               placeholder="Weight"/>
                        <input onChange={handleHeightChange} type="number" step="0.01" className="form-control mb-3"
                               placeholder="Height"/>
                        <button className="btn btn-danger w-100">Calculate</button>
                    </form>
                    <h3 className={`text-center ${color}`}>BMI is {bmi}</h3>
                    <p className={`text-center ${color}`}>{category}</p>
                </div>
            </div>
        </div>
    </div>)

    ///16th recording -- fusion
}