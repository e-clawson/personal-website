import React from "react"
import {Link} from 'react-router-dom'
import '../Footer/footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer-title">
                <h4>Keep In Touch! </h4>
            </div>
            <div className="sitemap">
                <h5>Sitemap:</h5>
                <Link to="/">Home</Link>
                <Link to="/softwareengineer">Software Engineer</Link>
                <Link to="/musician">Musician</Link>
                <Link to="/educator">Educator</Link>
                <Link to="/administrator">Administrator</Link>
            </div>
        </>
      
    )
}