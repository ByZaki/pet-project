import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IChildren {
  children: string;
}

export default function CustomBreadcrumbs({ children }: IChildren) {
  return (
    <>
      <Stack>
        <Breadcrumbs>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Home
          </Link>
          <Typography sx={{ color: "#0760A0" }}>{children}</Typography>
        </Breadcrumbs>
      </Stack>
    </>
  );
}
