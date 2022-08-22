import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a8k022r', 'template_wq84k5g', form.current, 'd_T9ZurBNvaw2T5p5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Form>
            <form ref={form} onSubmit={sendEmail}>
                <div></div>
                <label>Name</label>
                <input type="text" name="user_name" />
</div>
<div>
                <label>Subject</label>
                <input type="text" name="user_name" />
</div>
<div>
                <label>Email</label>
                <input type="email" name="user_email" />
</div>
<div>
                <label>Message</label>
                <textarea name="message" />
</div>
<div></div>
                <input type="submit" value="Send" />
<div></div>
            </form>
        </Form>
    )
}

export default Contact

const Form = styled.div`

`