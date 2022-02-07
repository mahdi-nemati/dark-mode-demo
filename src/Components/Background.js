import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-slate-100 dark:bg-gray-800 transition-all">{children}</body>
  );
};

export default Background;
