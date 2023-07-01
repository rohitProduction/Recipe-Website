import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function GridCard({ data }) {
  //const [counter, setCounter] = useState(0);
  const d = data.header;
  return (
    <>
      <div className="container text-center">
        {data.map(
          (item, index) =>
            (index + 1) % 3 == 0 && (
              <div className="row" key={"row" + item.id}>
                {[0, 1, 2].map((colItem, colIndex) => (
                  <div className="col" key={item.id + colIndex}>
                    Column
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </>
  );

  //   return (
  //     <>
  //       <h1>{heading}</h1>
  //       {data.length === 0 && <p>No Item Found</p>}
  //       <ul className="list-group">
  //         {data.map((item, index) => (
  //           <li
  //             key={item}
  //             className={
  //               index === selectedIndex
  //                 ? "list-group-item active"
  //                 : "list-group-item"
  //             }
  //             onClick={() => {
  //               setSelectedIndex(index);
  //               onSelectItem(item);
  //             }}
  //           >
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
}

export default GridCard;
