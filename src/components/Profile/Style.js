import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    margin-top: 50px;

    .img-container {
        width: 250px;
        height: 250px;
        background-color: red;
        border-radius: 50%;
        margin-right: 50px;
        overflow: hidden;
        border: 5px solid blue;
    }

    .img-container img {
        width: 100%;
        
    }

    .text-container {
        width: 450px;
        height: 250px;
        background-color: red;
        border-radius: 10px;
        box-shadow: 5px 10px 20px #888888;
        background-color: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text-container p {
        margin: 10px 0;
        font-size: 23px;
        font-weight: 500;
    }

    .text-container p span:first-child {
        margin-right: 20px;
        color:#636363;
    }

    
`