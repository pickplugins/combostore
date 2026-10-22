"use client";
import React, { useState } from "react";


/* `index` and `id` are read off this element's props by Tabs, so they stay in
   the signature - they just no longer leak onto the DOM node as attributes. */
const Tab = ({ index, id, className, children }) => {


  return (
    <div className={className}>{children}</div>

  );
};

export default Tab;
