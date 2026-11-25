import {useEffect, useState} from "react";

export default function FetchedData(){
    const [products, setProducts] = useState([]);
    //fetch, create, update, delete
    //postman
    async function fetchData(){
       const response = await fetch("https://dummyjson.com/products");
       if (response.ok){
           const data = await response.json();
           console.log(data.products[0]);
           setProducts(data.products)
       }else {
           console.log(response)
       }
    }
    //promises, async , await
    //hook == function
    useEffect(()=>{
        fetchData()
    }, [])

    const productList = products.map(item=>
        <div className="col-sm-4 col-md-3 text-center border p-2">
            <img src={item.thumbnail} alt=""/>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
        </div>)

    return (<div className="container">
              <div className="row">
                  {productList}
              </div>
            </div>)
}