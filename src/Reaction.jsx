import React from 'react';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/fa';
import * as MD from "react-icons/md";

const Reaction = props => {
    const string = "FaAirbnb";
    const icons = FA;
    const Tag = icons[string];
    debugger;
    return (
      <div>
        <Tag />
      </div>
    );
}

// Reaction.defaultProps = {
//     icon: ICONS[]
// }

export default Reaction;