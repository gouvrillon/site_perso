import React from "react";
import "./Client.css";
import { string, bool, object } from "prop-types";
import classnames from "classnames";
import get from "lodash/get";
import Tag from "../Tag/Tag.jsx";
import Name from "../Name/Name.jsx";

const Client = ({ className, client, darkMode, reversed }) => {
  return (
    <div
      className={classnames(`Client ${className}`, {
        "Client--reversed": reversed && !darkMode,
        "Client--darkMode": !reversed && darkMode,
        "Client--darkMode--reversed": reversed && darkMode,
      })}
    >
      <img className="Client__logo" src={get(client, "logo", "")} />
      <Name
        className="Client__name"
        name={get(client, "name", "")}
        darkMode={darkMode}
      />
      <div className="Client__tags">
        {get(client, "tags", []).map((tag, index) => (
          <Tag key={index} label={tag} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

Client.propTypes = {
  client: object.isRequired,
  darkMode: bool,
  reversed: bool,
  className: string,
};

export default Client;
