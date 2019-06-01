import styled from 'styled-components';

export const ButtonContainer = styled.button`
        text-transformation: capitalize;
        font-size:1.0rem;
        background: transparent;
        margin-left: auto;
        color: rgba(5, 162, 201, 0.45);
        border: 0.1rem solid var(--blue-color);
        
        border-radius: 0.5rem;
        padding: 0.2rem 0.5rem;
        cursor: pointer;
        margin: 0.2rem 0.5rem 0.2rem 0;
        transition: all 0.5s ease-in-out;
        &:hover{
            color:rgba(8, 64, 184, 0.45);
        }
        &:focus{
            outline: none;
        }
    `






