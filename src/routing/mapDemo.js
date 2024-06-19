import React from "react";

export default function MapDemo() {
  let cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
  ];

  //   TASK- "red station wagon which had a capacity 5, was registered on 2018-03-03"

  return (
    <div>
      This is MapDemo Component
      <br />
      {cars.map((car, index) => (
        <p key={index}>{` ${index + 1}. ${car.color} ${
          car.type
        } which has a capacity of ${
          car.capacity
        }, was registered on ${car.registration.toLocaleDateString(
          "en-CA"
        )}`}</p>
      ))}
    </div>
  );
}
