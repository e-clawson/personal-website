import React from 'react'
import './form.css'

const Form = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
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
        <form>
            <h5>Get In Touch:</h5>
            <div className="input-box">
                <label>First Name: </label>
                <input type="text" className="field" placeholder='Enter Your First Name' required/>
            </div>
            <div className="input-box">
                <label>Last Name: </label>
                <input type="text" className="field" placeholder='Enter Your Last Name' required/>
            </div>
            <div className="input-box">
                <label>Email Address: </label>
                <input type="email" className="field" placeholder='Enter Your Email Address' required/>
            </div>
            <div className="input-box">
                <label>Message: </label>
                <textarea name="" id="" className="field message" placeholder="Please enter your message here." required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>

    </section>
  )
}

export default Form