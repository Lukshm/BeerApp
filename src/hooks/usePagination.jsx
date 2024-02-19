import { useContext } from 'react'
import { GlobalStateContext } from '../context/Global'

const usePagination = () => {
  const { allBreweries, currentPage, setCurrentPage } =
    useContext(GlobalStateContext)

  const cardsPerPage = 8
  let currentPageBreweries = []
  const totalPages = Math.ceil(allBreweries.length / cardsPerPage)

  const allPages = Array.from(
    { length: totalPages },
    (ignored, index) => index + 1
  )

  let pages = []

  if (currentPage === 1) {
    pages = [...allPages.slice(0, 6), '...']
  } else if (currentPage > 1 && currentPage < Number(totalPages) - 2) {
    if (currentPage >= 5) {
      pages = [
        '...',
        ...allPages.slice(Number(currentPage) - 3, Number(currentPage) + 2),
        '...'
      ]
    } else if (currentPage < 5) {
      pages = [...allPages.slice(0, 6), '...']
    }
  } else {
    pages = [
      '...',
      ...allPages.slice(Number(totalPages) - 5, Number(totalPages))
    ]
  }

  const firstIndex = cardsPerPage * (currentPage - 1)
  const lastIndex = cardsPerPage * currentPage - 1

  if (allBreweries.length) {
    currentPageBreweries = allBreweries?.slice(firstIndex, lastIndex + 1)
  }

  const handleClick = (page) => {
    if (Number(page)) setCurrentPage(Number(page))
  }

  const handleClickPrev = () => {
    setCurrentPage(Number(currentPage) - 1)
  }

  const handleClickNext = () => {
    setCurrentPage(Number(currentPage) + 1)
  }

  return {
    currentPageBreweries,
    pages,
    totalPages,
    handleClick,
    handleClickPrev,
    handleClickNext
  }
}

export default usePagination