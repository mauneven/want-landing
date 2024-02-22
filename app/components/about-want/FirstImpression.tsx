"use client";
import { Title, Group, Text, Stack, Button } from "@mantine/core";
import classes from "../../../public/css/about-want/FirstImpression.module.css";
import { IconArrowDown } from "@tabler/icons-react";

export function FirstImpression() {

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 1,
      behavior: "smooth",
    });
  };

  return (
    <Stack justify="center" align="center" style={{ minHeight: "90vh" }}>
      <Stack>
        <Title ta={"center"} className={classes.title} c={"green"}>
          Redefining Online Commerce
        </Title>
      </Stack>
      <Group maw={800} justify="center">
        <Text ta={"center"} size="xl" mt={80}>
          Enabling users to post their desired items and receive offers from
          sellers, thereby transforming the traditional buying and selling
          experience.
        </Text>
      </Group>
      <Button onClick={handleScrollDown} mt={80} size="xl" variant="light" color="green" leftSection={<IconArrowDown/>}>
        Get started
      </Button>
    </Stack>
  );
}
