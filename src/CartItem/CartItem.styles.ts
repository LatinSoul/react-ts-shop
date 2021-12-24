import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 20px;
    border-bottom: 1px solid lightblue;
    div {
        flex=1;
    }
    .button, information {
        display: flex;
        justify-content: space-between;
    }
    img {
        max-width: 80px;
        object-fit: cover;
        margin-lef: 40px; 
    }

`;