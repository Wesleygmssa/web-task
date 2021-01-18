import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    display: flex;    
    flex-direction:column;
    align-items: center;
    
`;

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`;

export const TypeIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;


    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
        transition: all 0.5s;

        &:hover{
            opacity: 0.5;
        }

    }
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    span{
        font-weight: bold;
        color: #707070;
        margin: 5px 0px;

    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        outline: none;
        border-bottom: 1px solid #EE6B26;
    }
`;

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;


    span{
        font-weight: bold;
        color: #707070;
        margin: 5px 0px;

    }

    textarea{
        font-size: 16px;
        outline: none;
        border: 1px solid #EE6B26;
    }
`;

export const Options = styled.div`
    display: flex;
    /* justify-content: space-around; */
    justify-content: space-between;

    button{
        font-weight: bold;
        color: #20295F;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 18px;
        transition: all 0.5s;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;
    }
`;

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #EE6B26;
        border: none;
        font-size: 20px;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;
        outline:none;
        transition: all 0.5s;
        

        &:hover{
            opacity:0.7;
        }
    }
`;