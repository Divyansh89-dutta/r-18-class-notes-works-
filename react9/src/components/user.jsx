import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [products, setproducts] = useState([]);

    const getdata = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setproducts(data);
    };

    useEffect(() => {
        getdata();
    }, []);

    // useEffect(() => {
    //     console.log("[App.jsx] Created/Mounted");

    //     return () => {
    //         console.log("[App.jsx] Destruction/Unmounted");
    //     };
    // }, []);

    // console.log("[App.jsx] Loaded");
    console.log(products);
    return (
        <div>
            <h1>Use Effect Explained</h1>
            <button onClick={getdata}>Get Data</button>
        </div>
    );
};

export default App;