import {Counter} from "./components/Counter.jsx";
import {Converter} from "./components/Converter.jsx";
import {Products} from "./components/Products.jsx";
import MyForm from "./components/MyForm.jsx";


function App() {
    return (
        <>
            <MyForm/>
            <Products/>
            <Counter/>
            <Converter/>
        </>
    )
}

export default App

// npm install bootstrap