import styled from 'styled-components';

export const CardContainer = styled.div`
    width: auto;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-shadow: 5px 10px 20px #888888;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
    }

    .img-container {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid blue;
    }
    
    .img-container img {
        width: 100%;
        
    }

    .name {
        font-size: 25px;
        font-weight: 700;
        margin-top: 20px;
    }

    .email {
        font-size: 20px;
        font-weight: 500;
        margin-top: 20px;
    }
`