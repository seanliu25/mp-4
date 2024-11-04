import styled from "styled-components";
import Weather from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;G
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
`

export default function WeatherCard(props: Weather){
    return(
        <WeatherCardWrapper className = "weather-card">
            <h2>{props.datetime}</h2> 
            <p>{props.conditions}</p>
            <p>{props.description}</p>
            <p>{props.tempmin}F - {props.tempmax}F</p>
        </WeatherCardWrapper>
    )
}