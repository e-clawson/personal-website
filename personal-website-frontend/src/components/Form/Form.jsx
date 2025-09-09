import React from 'react'

const Form = () => {
  return (
    <section className='contact-form'>
        <form>
            <h5>Get In Touch:</h5>
            <div className="input-box">
                <label>First Name</label>
                <input type="text" className="field" placeholder='Enter Your First Name' required/>
            </div>
            <div className="input-box">
                <label>Last Name</label>
                <input type="text" className="field" placeholder='Enter Your Last Name' required/>
            </div>
        </form>

    </section>
  )
}

export default Form