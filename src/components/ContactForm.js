import React from 'react';
import { useState } from 'react';

export default function ContactForm() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const[ subject, setSubject ] = useState('');
    const[ message, setMessage ]= useState('');
  return (

    <div className="contact-form">
        <h1 className="page-name"> Contact me</h1>
        <form action="https://formsubmit.co/annabohun83@gmail.com" method="POST" className="contact-form">
            <div className="form-group">
                <label>Name</label>
                <br />
                <input type="text" value={ name } onChange={(e)=> setName(e.target.value)} className="form-control" placeholder="Enter your name" required/>
                
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} className="form-control" id="email" placeholder="Enter email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <br />
                <input type="text" onChange={(e)=> setSubject(e.target.value)} value={subject} className="form-control" id="subject" placeholder="Enter email" required/>
                <br />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <br />
                <textarea value={message} onChange={(e)=> setMessage(e.target.value)} name="Text1" cols="40" rows="5" type="text" className="form-control" id="message" placeholder="Write your message here" required></textarea>
            </div>
            <button className="btn btn-danger" variant="outline-danger" type="submit" clnpm ass="btn btn-primary">Submit</button>
            {/*<input type="hidden" name="_next" value="https://annakladovabohun.netlify.app/thankyou.html"></input>*/}
        </form>
    </div>
  )
}
