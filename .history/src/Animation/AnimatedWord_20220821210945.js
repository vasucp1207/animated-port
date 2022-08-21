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
        }
    }
`