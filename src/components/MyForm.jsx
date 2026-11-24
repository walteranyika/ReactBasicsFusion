import {useState} from "react";

export default function MyForm() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);


    function handleWeightChange(e) {
        setWeight(e.target.value);
    }

    function handleHeightChange(e) {
        setHeight(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        let result = weight/height**2
        setBmi(result)
    }



    return (<div>
              <div className="container">
                  <div className="row justify-content-center">
                       <div className="col-sm-6">
                           <form onSubmit={handleSubmit}>
                               <input onChange={handleWeightChange} type="number" className="form-control" placeholder="Weight"/>
                               <input onChange={handleHeightChange} type="number" className="form-control" placeholder="Height"/>
                               <button className="btn btn-danger w-100">Calculate</button>
                           </form>
                           <h3 className="text-center text-success">BMI is {bmi}</h3>
                       </div>
                  </div>
              </div>
           </div>)

    ///16th recording -- fusion
}