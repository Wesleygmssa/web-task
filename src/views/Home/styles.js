import styled from 'styled-components';


export const Container = styled.div`
    height: 120vh;

`;

export const FilterArea = styled.div`
   display: flex;
   justify-content: space-around; //espamento igual 
   margin-top: 30px;
 
 button{
     border:0;
     outline: none;
 }
`;

export const Content = styled.div`
   width:100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;

   a{
     text-decoration: none;
     color: black;
   }
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #20295F;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  h3{
    color:  #20295F;
    position: relative;
    top: 30px;
    background: #fff;
    padding: 0  30px;
  }
`