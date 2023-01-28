const commmand ="1"

const bla = " blaa blaa"

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  }) => {
    const paginationRange = useMemo(() => {
       // Our implementation logic will go here 
        
    }, [totalCount, pageSize, siblingCount, currentPage]);
  
    return paginationRange;
  };