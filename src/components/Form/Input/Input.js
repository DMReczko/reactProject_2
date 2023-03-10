import "./Input.css";

const Input = ({ getValue, id }) => {
    return (
        <input
            type="number"
            step="0.01"
            placeholder="0.00"
            id={id}
            className="form-input"
            onSubmit={getValue}
            name="amount"
            min="0"
        />
    );
};

export default Input;
