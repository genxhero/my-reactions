import React from 'react';
import Reaction from './Reaction';
import PropTypes from 'prop-types';
import * as FA from 'react-icons/fa';
import * as MD from "react-icons/md";

const LIBRARIES = {"FA": FA, "MD": MD}

const ReactionSection = props => {
    const library = LIBRARIES[props.library]
    return (
        <div>
            <Reaction />
        </div>
    )
}

    ReactionSection.defaultProps = {
        library: "FA"
    }

export default ReactionSection;