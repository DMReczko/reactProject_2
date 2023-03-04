import "./Input.css";

const Input = ({ getValue }) => {
    return (
        <input
            type="number"
            step="0.01"
            placeholder="0.00"
            id="formInput"
            className="Form-input"
            onSubmit={getValue}
            name="amount"
        />
    );
};

export default Input;
