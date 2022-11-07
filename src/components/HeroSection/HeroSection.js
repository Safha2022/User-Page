import "./HeroSection.css";
import img from "../../asssets/images/hero.jpg"
const HeroSection = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <img id="hero-img" src={img} alt="can not found the image" />
                </div>
                
            </div>
        </div>
    )
}
export default HeroSection;