"use client";

import { useState } from "react";
import weaponSkins from "../../../../public/data/weapon.json";
import Image from "next/image";
import SkinDisplay from "@/app/components/SkinDisplay";

const SkinsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8 * 5; // 8 columns * 5 rows
  const totalPages = Math.ceil(weaponSkins.length / itemsPerPage);
  const maxPage = Math.ceil(
    weaponSkins.filter((skin) => skin.price !== "N/A").length / itemsPerPage
  );

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="text-2xl p-5">CS2 SKINS</div>
      <div className="flex items-center flex-wrap gap-2 mx-5 mb-6 justify-center ">
        {weaponSkins
          .filter((skin) => skin.price !== "N/A")
          .sort((a, b) => b.price - a.price)
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((skin, index) => (
            <SkinDisplay
              key={index}
              ext={skin.ext}
              quality={skin.quality}
              name={skin.name}
              subcategory={skin.subcategory}
              price={skin.price}
              image={skin.image}
            />
          ))}
      </div>
      <div>
        <button onClick={handlePreviousPage}>Previous Page</button>
        <button onClick={() => handlePageChange(1)}>1</button>
        {currentPage === 1 && (
          <>
            <button onClick={() => handlePageChange(2)}>2</button>
            <button onClick={() => handlePageChange(3)}>3</button>
            {maxPage > 3 && <span>...</span>}
          </>
        )}
        {currentPage === 2 && (
          <>
            <button onClick={() => handlePageChange(2)}>2</button>
            <button onClick={() => handlePageChange(3)}>3</button>
            {maxPage > 3 && <span>...</span>}
          </>
        )}
        {currentPage === 3 && (
          <>
            <button onClick={() => handlePageChange(2)}>2</button>
            <button onClick={() => handlePageChange(3)}>3</button>
            {maxPage > 3 && <span>...</span>}
          </>
        )}
        {currentPage > 3 && currentPage < maxPage - 2 && <span>...</span>}
        {currentPage > 3 && currentPage < maxPage - 2 && (
          <button onClick={() => handlePageChange(currentPage)}>
            {currentPage}
          </button>
        )}
        {currentPage > 3 && currentPage < maxPage - 2 && <span>...</span>}
        {currentPage === maxPage - 2 && (
          <>
            {currentPage < maxPage && <span>...</span>}
            <button onClick={() => handlePageChange(maxPage - 2)}>
              {maxPage - 2}
            </button>
            <button onClick={() => handlePageChange(maxPage - 1)}>
              {maxPage - 1}
            </button>
          </>
        )}
        {currentPage === maxPage - 1 && (
          <>
            {currentPage < maxPage && <span>...</span>}
            <button onClick={() => handlePageChange(maxPage - 2)}>
              {maxPage - 2}
            </button>
            <button onClick={() => handlePageChange(maxPage - 1)}>
              {maxPage - 1}
            </button>
          </>
        )}
        {currentPage === maxPage && (
          <>
            {currentPage === maxPage && <span>...</span>}
            <button onClick={() => handlePageChange(maxPage - 2)}>
              {maxPage - 2}
            </button>
            <button onClick={() => handlePageChange(maxPage - 1)}>
              {maxPage - 1}
            </button>
          </>
        )}
        <button onClick={() => handlePageChange(maxPage)}>{maxPage}</button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default SkinsPage;
