"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

const TestPage = () => {
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchPrice = async () => {
      const url =
        "https://skin.club/en/skins/gloves/bloodhound-gloves-guerrilla-factory-new-extraordinary";
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      const price = $("div.row.active > div.price > span").text();
      setPrice(price);
    };

    fetchPrice();
  }, []);
  return <div>This is a test page. The price is {price}</div>;
};

export default TestPage;
