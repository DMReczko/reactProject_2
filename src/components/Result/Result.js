import "./Result.css";

const Result = ({ result }) => {
    return (
        <div className="Result-box">
            <p>
                to{" "}
                <span id="result" className="Result">
                    {result}
                </span>{" "}
                PLN
            </p>
        </div>
    );
};

export default Result;
