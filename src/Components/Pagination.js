import Post from './Post';
import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import './pagination.css';


export default function Pagination(props) {
  const items=props.data;
  const itemsPerPage=props.itemsPerPage;
  
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount,setPageCount]=useState(0);
  const [itemOffset,setItemOffset]=useState(0);

  useEffect(()=>{
    const endOffset=itemOffset+itemsPerPage;
    setCurrentItems(items.slice(itemOffset,endOffset));
    setPageCount(Math.ceil(items.length/itemsPerPage));
  },[itemOffset,itemsPerPage]);
  
  const handlePageClick=(event)=>{
    const newOffset=(event.selected * itemsPerPage)% items.length;
  setItemOffset(newOffset);  }

  return (
      <>
   <Post currentItems={currentItems} />
      <ReactPaginate
        className='numberdisplay'
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </>
    
  )
}
