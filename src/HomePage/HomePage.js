import { redirect } from "react-router-dom";
import styled from 'styled-components';

const Title = styled.h1`
    color: blue;
    font-size: 5rem;
    justify-content: center;
    font-weight: 800;
`;

const HomePage = () => {
   return (
    <Title className="h2 display-3 text-center">Home page</Title>
    )
}


export default HomePage;