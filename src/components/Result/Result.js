import "./Result.css";

const Result = ({ result }) => {
    return (
        <div className="result-box">
            <p>
                to
                <span id="result" className="result">
                    {` ${result} `}
                </span>
                PLN
            </p>
        </div>
    );
};

export default Result;
