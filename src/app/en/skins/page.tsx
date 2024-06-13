"use client";

import { useState } from "react";
import weaponSkins from "../../../../public/data/weapon.json";
import Image from "next/image";

const SkinsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8 * 5; // 8 columns * 5 rows
  const totalPages = Math.ceil(weaponSkins.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className="p-5">CS2 SKINS</div>
      <div className="grid grid-cols-8 gap-4 p-5">
        {weaponSkins
          .filter((skin) => skin.price !== "N/A")
          .sort((a, b) => b.price - a.price)
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((skin, index) => (
            <div key={index} className="bg-bg-highlight flex items-center justify-center">
              <div>{skin.name}</div>
              <div>{skin.price}</div>
              <Image
                src={`/images/weapons/${skin.image}`}
                alt={skin.name}
                width={128}
                height={128}/>
            </div>
          ))}
      </div>
      <button onClick={handlePreviousPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default SkinsPage;
