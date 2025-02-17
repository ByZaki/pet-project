import PageHeader from "../components/PageHeader";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs";
import { Stack } from "@mui/material";

export default function Dashboard() {
  return (
    <>
      <Stack>
        <CustomBreadcrumbs>Dashboard</CustomBreadcrumbs>
        <PageHeader title="Dashboard" />

        <Stack>Dashboard</Stack>
      </Stack>
    </>
  );
}
