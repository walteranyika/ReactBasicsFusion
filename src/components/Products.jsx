const items = [
    {id: 1, name: "Product 1", price: 700, code: "0001"},
    {id: 2, name: "Product 2", price: 830, code: "0002"},
    {id: 3, name: "Product 3", price: 250, code: "0003"},
    {id: 4, name: "Product 4", price: 600, code: "0004"},
]

export function Products() {

    const productList = items.map(item => <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>Code: {item.code}</p>
    </div>)
    // const productList2 = items.map(({name, price}) => <p> {name} {price}</p>)

    return (<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    {productList}
                </div>
            </div>
        </div>
    </>)
}