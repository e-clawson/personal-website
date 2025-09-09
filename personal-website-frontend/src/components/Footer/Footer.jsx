import React from "react"
import {Link} from 'react-router-dom'
import '../Footer/footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="contact-info">
                <h5>General Info:</h5>
                <p>
                    Elizabeth Clawson
                    <br></br>
                    Chicago, Illinois / New Delhi, IN 
                    <br></br>
                    Phone: +1 (847) 347 - 2572 
                    <br></br>
                    Email: emclawson1@gmail.com
                    <br></br>
                </p>


                
            </div>
            <div className="sitemap">
                <h5>Sitemap:</h5>
                <Link to="/">Home</Link>
                <Link to="/softwareengineer">Software Engineer</Link>
                <Link to="/musician">Musician</Link>
                <Link to="/educator">Educator</Link>
                <Link to="/administrator">Administrator</Link>
            </div>
        </div>
      
    )
}