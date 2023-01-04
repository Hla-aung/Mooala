import flavours from "../images/mooala_flavors.png"

const Flavours = () => {
    return(
        <div className="flavours">
            <div className="text">
                <h1>Only Banana Milk?</h1>
                <h1>No! Also Almond Milk.</h1>
                <p>Yes, you can choose another flavour, the <b>Almond Milk</b>.<br></br>
                    Organic almond with real vanilla bean and honey creates an aroma of freshness<br></br> 
                    and a flavour so mild and creamy.
                </p>
            </div>
            
            <img src={flavours} alt="flavours" />
           
        </div>
    )
}

export default Flavours