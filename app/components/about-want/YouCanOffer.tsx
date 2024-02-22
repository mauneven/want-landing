"use client";

import {
  Flex,
  Group,
  Stack,
  Title,
  Paper,
  Input,
  FileInput,
  NumberInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import React from "react";
import classes from "../../../public/css/about-want/YouCanOffer.module.css";


const YouCanOffer = () => {
  return (
    <Flex gap={100} justify="center" align="center" direction="row" wrap="wrap">
      <Stack maw={200}>
        <Title size="h1" fw={700}>
          Where the people and their companies can make offers
        </Title>
      </Stack>
      <Paper withBorder radius={"md"} shadow="xs" className={classes.offerPaper}>
        <Title ta={"center"} mb={"xl"}>
          {" "}
          You are doing an offer to &quot;Need iPhone 15 Pro&quot;
        </Title>
        <Title ta={"center"} mb={"xl"} size={"h2"}>
          The average payment is $850
        </Title>
        <Group gap={20} justify="center" align="center">
          <NumberInput min={0} placeholder="Price you offer" />
          <Input placeholder="Title of your offer"></Input>
          <Input placeholder="Description of your offer"></Input>
          <FileInput
            placeholder="Add some photos"
            accept="image/png,image/jpeg"
            leftSection={<IconUpload></IconUpload>}
          />
        </Group>
      </Paper>
    </Flex>
  );
};

export default YouCanOffer;
