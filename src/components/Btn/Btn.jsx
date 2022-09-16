import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        font-size: 20px;
        padding: 5px 25px;
        border-radius: 6px;
        background-color: #fff;
        font-weight: 600;
        box-shadow: 5px 5px 10px #d7d9d7;
        border: none;
        cursor: pointer;
    }
`

const Btn = () => {
  return (
    <Container>
      <button>Back</button>
    </Container>
  )
}

export default Btn
