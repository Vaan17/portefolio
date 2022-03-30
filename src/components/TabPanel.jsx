import React from 'react'

const TabPanel = ({children, value, index}) => {
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        style={{width: "100%"}}
      >
        {value === index && (
            // Expected JSX.Element as children
            <>{children}</>
        )}
      </div>
    );
}

export default TabPanel