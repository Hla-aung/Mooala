import chocolate from "../images/chocolate.jpg"
import coffee from "../images/coffee.jpg"
import pancake from "../images/pancake.jpg"
import peanut from "../images/peanut.jpg"

const Cook = () => {
    return (
        <div className="cook">
            <h1>Cookin' with MOOALA</h1>
            <div className="grid-box">
                <div className="grid-card chocolate">
                    <img src={chocolate} alt="chocolate" className="grid-img" />
                    <p>Peppermint Chocolate Burnt Cake</p>
                    <button>Show Details</button>
                </div>
                <div className="grid-card coffee">
                    <img src={coffee} alt="coffee" className="grid-img" />
                    <p>Dalgona Coffee</p>
                    <button>Show Details</button>
                </div>
                <div className="grid-card pancake">
                    <img src={pancake} alt="pancake" className="grid-img" />
                    <p>Mini Pancake Cereal with Oat Milk</p>
                    <button>Show Details</button>
                </div>
                <div className="grid-card peanut">
                    <img src={peanut} alt="peanut" className="grid-img" />
                    <p>Peanut Butter</p>
                    <button>Show Details</button>
                </div>
            </div>
        </div>
    )
}

export default Cook