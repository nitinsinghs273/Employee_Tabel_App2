import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <a key={number} className='page-item' onClick={() => paginate(number)} href='!#' >
            
              {number}
            
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;