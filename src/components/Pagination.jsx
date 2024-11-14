import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Box display="flex" alignItems="center" mt={4}>
      <Button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <Typography variant="body1" sx={{ mx: 2 }}>
        Page {currentPage} of {totalPages}
      </Typography>
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
