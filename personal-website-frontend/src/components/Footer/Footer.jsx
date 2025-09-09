import React from "react"
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer-title">
                <h4>Keep In Touch! </h4>
            </div>
            <div className="sitemap">
                <h5>Sitemap:</h5>
                <Link to="/home">Home</Link>
                <Link to="/contact">Software Engineer</Link>
                <Link to="/events">Musician</Link>
                <Link to="/exhibits">Educator</Link>
                <Link to="/home">Administrator</Link>
            </div>
        </>
      
    )
}