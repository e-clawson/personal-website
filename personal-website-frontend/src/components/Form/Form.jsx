import React from 'react'
import './form.css'

const Form = () => {
    const MY_ACCESS_KEY = import.meta.env.VITE_API_KEY;
    const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
    
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", MY_ACCESS_KEY);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch(VITE_BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

  return (
    <section className='contact-form'>
        <form onSubmit={onSubmit}>
            <h5>Get In Touch:</h5>
            <div className="input-box">
                <label>First Name: </label>
                <input type="text" className="field" placeholder='Enter Your First Name' name="firstName" required/>
            </div>
            <div className="input-box">
                <label>Last Name: </label>
                <input type="text" className="field" placeholder='Enter Your Last Name' name="lastName" required/>
            </div>
            <div className="input-box">
                <label>Email Address: </label>
                <input type="email" className="field" placeholder='Enter Your Email Address' name="email" required/>
            </div>
            <div className="input-box">
                <label>Message: </label>
                <textarea name="message" id="" className="field message" placeholder="Please enter your message here." required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>

    </section>
  )
}

export default Form