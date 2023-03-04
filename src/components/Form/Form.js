import "./Form.css";
import "./Loader.css";
import Input from "./Input/Input.js";
import Btn from "./Btn/Btn.js";
import Selection from "./Selection/Selection.js";
import { useState } from "react";

const Form = ({ setResult }) => {
    const [loading, setLoading] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const { amount, select } = e.target;
        const url = `https://api.nbp.pl/api/exchangerates/rates/a/${select.value}/`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const multiplier = parseFloat(data.rates[0].mid);
                const result = parseFloat(
                    (amount.value * multiplier).toFixed(2)
                );

                setResult(result);
            })

            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <div className="loaderbox">
                <div className={loading ? "loader" : "hidden"}></div>
            </div>
            <form className="calc-form" onSubmit={handleOnSubmit}>
                <Input />
                <Selection />
                <Btn />
            </form>
        </>
    );
};

export default Form;
