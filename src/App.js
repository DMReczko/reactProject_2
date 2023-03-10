import { useState } from "react";

import Logo from "./assets/coin.png";
import Form from "./components/Form/Form.js";
import Result from "./components/Result/Result.js";

import "./App.css";

const App = () => {
    const [result, setResult] = useState("");
    const handleResult = (result) => {
        setResult(result);
    };

    return (
        <div className="app">
            <header className="app-header">
                <img src={Logo} className="app-logo" alt="logo" />
                <h1 className="app-h1">Coinverter</h1>
                <h2 className="app-h2">Przelicznik walut</h2>
            </header>

            <Form setResult={handleResult} />
            <Result result={result} />
        </div>
    );
};

export default App;
