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
            <h2>Projects:</h2>

            <div>
                <div class="row row-cols-2 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>

    </>
)
}