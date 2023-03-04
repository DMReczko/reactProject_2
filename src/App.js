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
        <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
                <h1 className="App-h1">Coinverter</h1>
                <h2 className="App-h2">Przelicznik walut</h2>
            </header>

            <Form setResult={handleResult} />
            <Result result={result} />

            <ul></ul>
        </div>
    );
};

export default App;
