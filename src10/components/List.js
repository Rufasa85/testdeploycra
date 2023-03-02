import React from "react";

function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.filter((item) => !item.purchased).map((item) => <li key={item.id} id={`item-${item.id}`}>{item.name}</li>)}
    </ul>
  );
}

export default List;
