import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function GridCard({}) {
  const description = "desc";
  const header = "header";
  const img = "/logo192.png";
  const handleButton = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img
          src={img}
          className="card-img-top"
          style={{ width: "200px", maxHeight: "200px" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{header}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <h1>{heading}</h1>
  //     {data.length === 0 && <p>No Item Found</p>}
  //     <ul className="list-group">
  //       {data.map((item, index) => (
  //         <li
  //           key={item}
  //           className={
  //             index === selectedIndex
  //               ? "list-group-item active"
  //               : "list-group-item"
  //           }
  //           onClick={() => {
  //             setSelectedIndex(index);
  //             onSelectItem(item);
  //           }}
  //         >
  //           {item}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
}

export default GridCard;
