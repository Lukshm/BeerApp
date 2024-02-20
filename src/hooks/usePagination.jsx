import { useContext } from 'react';
import { GlobalStateContext } from '../context/Global';

const usePagination = (filteredBreweries) => {
  const { currentPage, setCurrentPage } = useContext(GlobalStateContext);
  const cardsPerPage = 8;
  let currentPageBreweries = [];
  const totalPages = Math.ceil(filteredBreweries.length / cardsPerPage);

  if (filteredBreweries.length) {
    const firstIndex = cardsPerPage * (currentPage - 1);
    const lastIndex = cardsPerPage * currentPage;
    currentPageBreweries = filteredBreweries.slice(firstIndex, lastIndex);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
  };

  return {
    currentPageBreweries,
    totalPages,
    handleClick,
    handleClickPrev,
    handleClickNext
  };
};

export default usePagination;
