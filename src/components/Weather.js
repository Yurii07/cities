import React from "react";

const Weather = props => (
    <div>
        {props.city &&
        <div>
            <p>Местоположение: {props.city}, {props.country}</p>
            <p>Температура: {props.temp}</p>
            <p>Восход солнца: {props.sunrise}</p>
            <p>Заход солнца: {props.sunset}</p>
        </div>
        }
        <p>{props.error}</p>
    </div>
);

export default Weather;