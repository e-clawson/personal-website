import '/src/components/Styling/SoftwareEngineer.css'

export default function SoftwareEngineer() { 

return(
    <>
        <div className='title'>
            <h1>Software Engineer</h1>
        </div>
        <div className="description">
            <p>
                In the fall of 2022, After seeing friends within the music industry successfully transition to fulfilling careers in tech, I decided to try out software engineering for myself 
                by enrolling in Flatiron's part-time, online Software Engineering Bootcamp. Here, I learned the fundamentals of full-stack development, inculding HTML, CSS, Javascript, React, Ruby on Rails, and more. 
                Most importantly, I learned that software engineering takes a lot of creative problem-solving, which is one of my gretest skils. I learned this is a type of work I have interest in, and can thrive doing! 
            </p>
            <p>
                To continue my growth, I completed Per Scholas' 16 week, full-time Software engineering bootcamp in the summer of 2024. In this program, I was able to 
                explore the MERN stack, growing my skills in HTML, CSS, JavaScript, and React, while adding fundamental knowledge about express and backend technologies like MongoDB. 
            </p>
        </div>
        <div className='tech-section'>
            <h2>Technologies:</h2>
            <img className= "tech-logo"src="/SWE Logos/HTML5_logo_and_wordmark.svg.png" alt="HTML 5 Logo"/>
            <img className= "tech-logo" src="/SWE Logos/CSS3_logo.svg" alt="CSS3 Logo"/>
            <img className= "tech-logo" src="/SWE Logos/JavaScript-logo.png" alt="JavaScript Logo"/>
            <img className= "tech-logo" src="/SWE Logos/React-icon.svg" alt="react logo"/>
            <img className= "tech-logo" src="/SWE Logos/Vitejs-logo.svg" alt="Vite Logo"/>   
            <img className= "tech-logo" src="/SWE Logos/MongoDB_Fores-Green.svg" alt="MongoDB Logo"/>  
        </div>

        <div className='project-section'>
            <h2 className='project-section-title'>Projects:</h2>

            <div>
                <div class="row row-cols-2 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                        <img src="/Project-Images/bridgehouse.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Bridgehouse Website</h5>
                            <p class="card-text">This is my final project for Per Scholas. At the time, I was working as a Museum Associate for the McCormick Bridgehouse & Chicago River Museum, 
                                and I simulated a real world client project by working with my manager to update the museum's website per his requests.
                                Specifically, I focused on adding a more robust and navigable exhibits section. </p>
                            <a href="https://youtu.be/B18BhMWE8pY" class="btn btn-primary">Youtube</a>
                            <a href="https://github.com/e-clawson/bridgehouse-project" class="btn btn-primary">Github</a>
                            <a href="https://bridgehouse-project.netlify.app/" class="btn btn-primary">Live Demo</a>

                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="/Project-Images/my-closet-app.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">MyClosetApp</h5>
                            <p class="card-text">MyClosetApp is an API designed to help users organize outfit ideas from their wardrobes. While using MyClosetApp, users can log into/signup for the app, view a list of all of their closet items and add/edit/delete those items (including photos of items), and create outfits. Made as my final project for flatiron's online software engineering course</p>
                            <a href="https://www.youtube.com/watch?v=Ud8k6wROlek" class="btn btn-primary">Youtube</a>
                            <a href="https://github.com/e-clawson/my-closet-app" class="btn btn-primary">Github</a>

                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Youtube</a>
                            <a href="#" class="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-primary">Youtube</a>
                            <a href="#" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>

    </>
)
}