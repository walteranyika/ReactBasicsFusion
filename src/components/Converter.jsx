import {useState} from "react";

export function Converter(){

    const [dollar, setDollar] = useState(0);
    const [pound, setPound] = useState(0);


    function handleChange(e) {
        let value = e.target.value;
        let d = value/130
        d= Math.round(d*100)/100

        let p = value/169
        p = Math.round(p*100)/100

        setDollar(d)
        setPound(p)
    }

    return (<div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <h2>Convert Ksh</h2>
                        <input onChange={handleChange} type="number" className="form-control"/>
                        <p>$ {dollar}</p>
                        <p>&pound; {pound}</p>
                    </div>
                </div>
           </div>)
}