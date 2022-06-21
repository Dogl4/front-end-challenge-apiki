import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Fetch({ url, children, setData }) {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    let mounted = true;

    axios.get(url)
      .then((res) => {
        if (mounted) {
          setData(res);
          setTemp(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, [url]);

  return !temp ? <span data-testid="loading">Loading...</span> : children;
}

Fetch.propTypes = ({
  url: PropTypes.string,
  children: PropTypes.node,
}).isRequired;

export default Fetch;
