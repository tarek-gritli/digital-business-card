import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pfp from "../assets/profile-pic.png"
export default function Info()
{
    return(
        <div className="col info">
            <img className="img-fluid pfp" src={pfp} alt="profile-picture" />
            <h1>Tarek Gritli</h1>
            <h6>Frontend Developer</h6>
            <p>Tunis, Tunisia</p>
            <div className="btn-group contact" oncClick={()=>handleClick("mailto:gritli.tarek66@gmail.com")}>
                <button className="btn btn-warning buttons">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    Email
                </button>
                <button className="btn btn-primary buttons" onClick={()=>handleClick("https://www.linkedin.com/in/tarek-gritli/")}>
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                    Linkedin
                </button>
                <button className="btn btn-dark buttons" onClick={()=>handleClick("https://github.com/tarek-gritli")} >
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                    Github
                </button>
            </div>
        </div>
    )
}
function handleClick (url)
{
    window.open(url)
}
