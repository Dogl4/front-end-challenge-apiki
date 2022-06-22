import React from 'react';
import PropTypes from 'prop-types';

function Loading({ visible }) {
  return !visible ? <span data-testid="loading">Loading...</span> : null;
}

Loading.propTypes = ({
  visible: PropTypes.bolean,
}).isRequired;

export default Loading;
