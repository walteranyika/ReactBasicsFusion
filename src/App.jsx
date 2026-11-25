import {Counter} from "./components/Counter.jsx";
import {Converter} from "./components/Converter.jsx";
import {Products} from "./components/Products.jsx";
import MyForm from "./components/MyForm.jsx";
import FetchedData from "./components/FetchedData.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Navbar} from "./components/Navbar.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/about" element={ <About/> } />
                    <Route path="/services" element={ <Services/> } />
                    <Route path="*" element={ <NotFound/> } />
                </Routes>
            </BrowserRouter>
            {/*<FetchedData/>*/}
            {/*<MyForm/>*/}
            {/*<Products/>*/}
            {/*<Counter/>*/}
            {/*<Converter/>*/}
        </>
    )
}

export default App

// npm install bootstrap
// npm install react-router