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
            <form ref={form}>
                <div className='name'>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div className='email'>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div className='subject'>
                    <label>Subject</label>
                    <input type="text" name="user_name" />
                </div>
                <div className='message'>
                    <label>Message</label>
                    <textarea name="message" />
                </div>
                <div className='sub-btn'>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </Form>
    )
}

export default Contact

const Form = styled.div`

    margin-top: 100px;
    padding: 50px;
    form{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
        font-size: 20px;
    }

    div{
        display: flex;
        flex-direction: column;
    }

    input{
        outline: none;
        border: none;
        height: 35px;
        border-radius: 5px;
    }

    textarea{
        border: none;
        outline: none;
        height: 55px;
        border-radius: 5px;
    }

    .subject{
        grid-column: 1 / 5;
    }

    .message{
        grid-column: 1 / 3;
    }

    .sub-btn{
        grid-column: 1 / 3;
        /* width: 40vw;
        justify-content: center;
        background-color: red; */
    }
`