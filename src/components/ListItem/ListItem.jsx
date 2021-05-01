import React from "react";
import "./ListItem.scss";

function ListItem({no,heading,data,href}) {
  return (
    <div className="listitem">
      <div className="listitem-sno">{no}</div>
      <div className="listitem-data">
        <div className="listitem-heading">{heading}</div>
        <div className="listitem-content">
          {data}
          <br/>{href && <div>For more details please visit <a href={href} target='__blank'>{href}</a></div>}
        </div>
      </div>
    </div>
  );
}

export default ListItem;
