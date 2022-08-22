import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Contact() {
    const form = useRef();
    const position = [51.505, -0.09]

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
                <div className='name' onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder='Enter your Name'  />
                </div>
                <div className='email'>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='Enter your Email' />
                </div>
                <div className='subject'>
                    <label>Subject</label>
                    <input type="text" name="user_name" placeholder='Enter your Subject' />
                </div>
                <div className='message'>
                    <label>Message</label>
                    <textarea name="message" placeholder='Enter your Message' />
                </div>
                <div className='submit'>
                    <input  className='sub-btn' type="submit" value="Send" />
                </div>
            </form>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
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

    label{
        background-image: var(--orange-pink);
        width: fit-content;
        margin-bottom: 5px;
        border-radius: 5px;
        padding: 5px;
    }

    div{
        display: flex;
        flex-direction: column;
    }

    input{
        outline: none;
        border: none;
        height: 45px;
        border-radius: 5px;
        font-size: 18px;
        padding-left: 10px;
        :focus{
            border: 2px solid var(--orange);
        }
    }

    textarea{
        border: none;
        outline: none;
        height: 105px;
        border-radius: 5px;
        font-size: 20px;
        padding-left: 10px;
        :focus{
            border: 2px solid var(--orange);
        }
    }

    .subject{
        grid-column: 1 / 5;
    }

    .message{
        grid-column: 1 / 5;
    }

    .name{
        grid-column: 1 / 3;
    }

    .email{
        grid-column: 3 / 5;
    }

    .submit{
        margin-top: 50px;
        grid-column: 2 / 4;
    }

    .sub-btn{
        cursor: pointer;
        border: 2px solid var(--orange);
        font-size: 25px;
        letter-spacing: 2;
        :hover{
            background-image: var(--orange-pink);
            color: white;
        }
    }

    
`