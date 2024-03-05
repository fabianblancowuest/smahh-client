import React from "react";
import "./CombinedStyles.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={pageNumber === currentPage ? "current-page" : "page-number"}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};

export default Pagination;