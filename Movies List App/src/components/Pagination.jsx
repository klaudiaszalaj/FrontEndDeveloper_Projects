import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { 
        pages[i-1] = pagesCount - (pagesCount-i)
    };   
    

        return (
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
               
                {pages.map(page => 
                <li 
                style={{cursor: "pointer"}}
                key={page}
                className={page === currentPage ? 'page-item active' : 'page-item'}
                >
                <h5 
                className="page-link"
                onClick={() => onPageChange(page)}
                >
                {page}
                </h5>
                </li> )};
                
              </ul>
            </nav>
        )
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};


export default Pagination