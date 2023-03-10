import "./Btn.css";

const Btn = ({ id }) => {
    return (
        <input type="submit" value="Przelicz" id={id} className="form-btn" />
    );
};

export default Btn;
