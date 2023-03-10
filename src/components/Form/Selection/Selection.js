const Selection = ({ id }) => {
    return (
        <select id={id} className="form-sel" name="select">
            <option value="chf">CHF</option>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
        </select>
    );
};

export default Selection;
