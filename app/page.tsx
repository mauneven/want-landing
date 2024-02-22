import React from "react";
import { FirstImpression } from "./components/about-want/FirstImpression";
import { Stack } from "@mantine/core";

const page = () => {
  return (
    <Stack bg="var(--mantine-color-body)" gap="xl">
      <FirstImpression />
    </Stack>
  );
};

export default page;
