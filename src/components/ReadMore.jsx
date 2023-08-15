import React, { useState } from 'react';
import { FaReadme } from 'react-icons/fa';

const ReadMoreButton = ({ initialText , expandedText }) => {
  const [expanded , setExpanded] = useState(false); // State for tracking the expanded state of the button

  const handleExpand = () => {
    setExpanded(!expanded); // Toggle the "expanded" state when the button is clicked
  };

  return (
    <div className='button-container'>
      <button className='read-more-button' onClick={handleExpand}>
        {expanded ? expandedText : initialText}
        <span style={{ marginLeft: '5px' }}>
          <FaReadme />
        </span>
      </button>
    </div>
    
  );
};

export default ReadMoreButton;
