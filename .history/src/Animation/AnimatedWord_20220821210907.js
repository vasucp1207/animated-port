import React from 'react'
import styled from 'styled-components';

function AnimatedWord({ text }) {

    const letters = Array.from(text);

    return (
        <Container>
            {letters.map((letter) => (
                <span className='words'
                >
                    {letter}
                </span>
            ))}
        </Container>
    )
}

export default AnimatedWord

const Container = styled.div`
    .words{
        :hover{
            cursor: pointer;
            color: wheat;
            animation: rubberBand 1s;
            animation-duration: 1s;
            animation-delay: 1s;
            animation-fill-mode: forwards;

            @keyframes rubberBand {
                40%{
                    font-size: 0.7;
                }
                10%{
                    font-size: 1.3;
                }
            }
        }
    }
`