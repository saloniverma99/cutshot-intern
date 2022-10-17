import React, {useState} from "react";
import ss1 from "../Assets/ss1.webp";
import ss2 from "../Assets/ss2.png";
import ss3 from "../Assets/ss3.png";
import ss4 from "../Assets/ss4.png";
import pp from "../Assets/pp.webp";
import '../styles/Corousel.css';

function Corousel() {

    const [imgSrc, setImgSrc] = useState(ss1);

    return (
        <div className="corousel">
            <div className="container-head">
                <img src={pp} alt="profile picture" className="pp"/>
                <div className="info">
                    <h4 className="heading">Justino - Onboarding</h4>
                    <div style={{fontfamily: 'Inter'}}>
                    <p className="para">Vincent Staude <p1>for</p1> Balkan Brother- Follow</p>
                    </div>
                </div>
                <button className="save">
                    Save
                </button>
                <button className="like">
                    &#9825; Like
                </button>
            </div>
            <div className="container">
                <img src={imgSrc} id="image"/>
                <div className="btn-container">
                    <img src={ss1} className="image-small" onClick={() => setImgSrc(ss1)}/>
                    <img src={ss2} className="image-small" onClick={() => setImgSrc(ss2)}/>
                    <img src={ss3} className="image-small" onClick={() => setImgSrc(ss3)}/>
                    <img src={ss4} className="image-small" onClick={() => setImgSrc(ss4)}/>
                </div>
            </div>
        </div>
    );
}

export default Corousel;
