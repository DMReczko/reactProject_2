import "./Form.css";
import Input from "./Input/Input.js";
import Btn from "./Btn/Btn.js";
import Selection from "./Selection/Selection.js";

const Form = ({ setResult }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

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

            .catch((err) => console.log(err));
    };

    return (
        <form className="Calc-form" onSubmit={handleOnSubmit}>
            <Input />
            <Selection />
            <Btn />
        </form>
    );
};

export default Form;
