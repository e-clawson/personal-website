export default function Navbar() {
    <>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/Eo_circle_blue_letter-e.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Elizabeth Clawson
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./components/Pages/Home.jsx">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./components/Pages/SoftwareEngineer.jsx">Software Engineer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Musician</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Educator</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Administrator</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li> */}
                    {/* I think the above commented out line is just an example of how to disable a menu link so I will keep it for now and comment it out and delete it at the end */}
                    </ul>
                </div>
            </div>
      </nav>
    </>
}