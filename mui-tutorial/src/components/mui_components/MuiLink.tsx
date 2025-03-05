import { Stack, Link } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="none">
        Secondary
      </Link>
    </Stack>
  );
};

export default MuiLink;
