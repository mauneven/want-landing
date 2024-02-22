import React from "react";
import { FirstImpression } from "./components/about-want/FirstImpression";
import { Container, Stack, Title } from "@mantine/core";
import PostWhatYouWant from "./components/about-want/PostWhatYouWant";
import ReceivedOffers from "./components/about-want/ReceivedOffers";

const page = () => {
  return (
    <Container bg="var(--mantine-color-body)" fluid>
      <Stack gap={50}>
        <FirstImpression />
        <Title c={"green"} ta={"center"}>What is Want?</Title>
        <PostWhatYouWant />
        <ReceivedOffers/>
      </Stack>
    </Container>
  );
};

export default page;
