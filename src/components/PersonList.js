import React from "react";
function PersonList({ person }) {
  return (
    <div>
      <h2>
        My Id is {person.id} my name is {person.name}
      </h2>
    </div>
  );
}

export default PersonList;
