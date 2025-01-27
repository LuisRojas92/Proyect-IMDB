import React from "react";

const Pagination = ({ page, setPage }) => (
  <div className="pagination">
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>
      Anterior
    </button>
    <span>Página {page}</span>
    <button onClick={() => setPage(page + 1)}>Siguiente</button>
  </div>
);

export default Pagination;
