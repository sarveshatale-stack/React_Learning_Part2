import React from "react";
// import Personal from "./components/Personal";

function ListRendering() {
  const person = [
    {
      id: 1,
      name: "ABC",
      age: 21
    },
    {
      id: 2,
      name: "DEF",
      age: 22
    },
    {
      id: 3,
      name: "GHI",
      age: 23
    },
    {
      id: 4,
      name: "JKL",
      age: 24
    }
  ];
  // const Name = ["ABC", "XYZ", "PQR"];
  // const NameList=Name.map((name) => (
  //   <h2>{name}</h2>
  // ));
  const personList = person.map((person1) => (
    <h2>
      My Id is {person1.id} my name is {person1.name}
    </h2>
  ));

  //const personList = person.map((person1) => <Personal person={person1} />);
  return (
    // <div>
    //  <h2>{Name[0]}</h2>

    //  {Name[1]}
    // </div>
    // <div>
    //   {Name.map((name) => (
    //     <h2>{name}</h2>
    //   ))}
    // </div>
    <div>{personList}</div>
  );
}

export default ListRendering;
