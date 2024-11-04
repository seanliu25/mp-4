"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/components/weatherCard";
import styled from "styled-components";
import Weather from "@/app/interfaces/weather";

const WeatherContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    background-color: #E8E8E8;
`;

const CityName = styled.h1`
    text-align: center;
    color: Black solid;
`;

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-row: row wrap;
    border: black 5px solid;
`;

export default function CityPage(){
    const params = useParams();
    const city = params.city || "Unknown";

    const {data,error} = useSWR(`/api/getWeatherData?city=${city}`, (url) => 
        fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>

    const days = data?.days || [];

    return(
        <WeatherContentWrapper>
            <CityName>{city}</CityName>
            <WeatherCardsContainer>
                {
                    days.map((weather: Weather, i: number) =>
                    (
                        <WeatherCard
                            key={i}
                            datetime={weather.datetime}
                            conditions={weather.conditions}
                            description={weather.description}
                            tempmin={weather.tempmin}
                            tempmax={weather.tempmax}
                            />
                    )
                    
                    )
                }
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    )
}


