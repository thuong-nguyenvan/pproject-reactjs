import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

CategorySkeleton.propTypes = {
  length: PropTypes.number,
};

function CategorySkeleton({ length = 1 }) {
  return (
    <Box padding={1}>
      <Skeleton width="58%" />
      <Skeleton width="58%" />
      <Skeleton width="58%" />
      <Skeleton width="58%" />
      <Skeleton width="58%" />
      <Skeleton width="58%" />
    </Box>
  );
}

export default CategorySkeleton;
