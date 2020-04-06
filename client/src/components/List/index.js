import React from "react";
import "./style.css";


export function ListItem({ children }) {
  return (
    <div className="card col-12 col-md-12 col-lg-5 cardItem">
      {children}
    </div>
  )
}

export function List({ children }) {
  return (
    <div className="container cardList">
      <div className="row">
        {children}
      </div>
    </div>
  )
}


// import React from "react";
// import "./style.css";

// // This file exports both the List and ListItem components

// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }