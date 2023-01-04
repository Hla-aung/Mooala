import usda from "../images/usda-logo.png";
import organic from "../images/organic.jpg"

const Organic = () => {
    return (
        <div className="organic">
            <h1>The MOOALA Organic</h1>
            <div className="organic-box">
                <img src={usda} className="usda" alt="usda"/>
                <img src={organic} className="org" alt="organic"/>
            </div>
        </div>
    )
}

export default Organic