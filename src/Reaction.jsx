import React from 'react';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/fa';
import * as MD from "react-icons/md";

const Reaction = props => {

    const icon = props.icon;
    let icons;
    switch (props.library) {
      case "MD":
        icons = MD
        break;
      default:
        icons = FA;
    }
    const Tag = icons[icon];
    debugger;
    return (
      <div>
        <Tag />
      </div>
    );
}

 Reaction.defaultProps = {
     icon: "FaAirbnb",
     library: "FA"
 }

export default Reaction;