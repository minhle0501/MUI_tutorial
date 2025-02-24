import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const MuiBreadcrumbs = () => {
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext />}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
