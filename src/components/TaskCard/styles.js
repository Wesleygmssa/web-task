import styled from 'styled-components';


export const Container = styled.div`
    width: 250px;
    height: 200px;
    -webkit-box-shadow: 2px 11px 20px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 11px 20px -3px rgba(0,0,0,0.75);
    box-shadow: 2px 11px 20px -3px rgba(0,0,0,0.75);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s ease;
    
    display: flex;
    align-items: center;
    justify-content: center;
   flex-direction: column;

   margin: 20px;

   &:hover{
       opacity: 0.5 ;
   }

`;


export const TopCard = styled.div`
 
    display: flex;
    align-items: center;
    justify-content: center;
   flex-direction: column;

`;


export const BottomCard = styled.div`
     width: 100%;
     display: flex;
     justify-content: space-around;

     strong{
         color: #EE6B26;
         font-weight: bold;
     }

     span{
         color: #707070;
         font-weight: bold;

     }
`;


