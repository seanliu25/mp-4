"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #E8E8E8;
  color: black;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  color: black;
  background-color: white;
  border: 2px solid white;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 200px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: black;
  background-color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: grey;
    color: white;
  }
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <Title>Find the Weather in Any City!</Title>
      <Subtitle>Enter a city name below to get the current weather</Subtitle>
      <Input
        type="text"
        value={city}
        placeholder="City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <StyledLink href={`/${city}`}>Get Weather</StyledLink>
    </StyledDiv>
  );
}
