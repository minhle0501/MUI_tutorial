import { Stack, Pagination } from "@mui/material";

const MuiPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
      <Pagination count={10} showFirstButton showLastButton />
    </Stack>
  );
};

export default MuiPagination;
