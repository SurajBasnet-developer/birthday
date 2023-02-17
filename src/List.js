import React from "react";
const List = ({ person }) => {
  return (
    <div>
      {person.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;
