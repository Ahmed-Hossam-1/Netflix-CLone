import { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import LayoutSlider from "./LayoutSlider";

const Pagination = ({ setPageNumber, totalMovies, genres, latestMovies }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  // eslint-disable-next-line react/prop-types
  const currentItems = totalMovies?.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(1000 / itemsPerPage);

  const handlePageClick = (event) => {
    // eslint-disable-next-line react/prop-types
    const newOffset = (event.selected * itemsPerPage) % totalMovies?.length;
    setItemOffset(newOffset);
    setPageNumber(event.selected + 1);
  };
  return (
    <Container>
      <LayoutSlider
        movies={currentItems}
        genres={genres}
        latestMovies={totalMovies}
      />
      <ReactPaginate
        breakLabel="..."
        breakLinkClassName="pagination-break-label"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-item"
        nextLinkClassName="next-item"
        previousLinkClassName="prev-item"
        activeClassName="active-item"
      />
    </Container>
  );
};

const Container = styled.section``;

export default Pagination;
