"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "../../../../public/data/weapon.json";

const TestPage = () => {

  return (
    console.log(data),

    <div>
      This is a test page. The price is
      {data.map((item, i) => (
        <div key={i}>
          <span>{item.id} </span>
          <span>{item.name} </span>
          {/* Add more properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default TestPage;
