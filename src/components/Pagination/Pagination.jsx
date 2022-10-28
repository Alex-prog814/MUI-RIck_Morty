import React, { useContext } from 'react';
import './Pagination.css';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { postsContext } from '../../postContext';

export default function PaginationControlled() {
//   const [page, setPage] = React.useState(1);
  const { setPage, page, totalPages } = useContext(postsContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="pagination-block">
        {/* PAGE: {page} */}
        <Stack spacing={2}>
            <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
    </div>
  );
}
