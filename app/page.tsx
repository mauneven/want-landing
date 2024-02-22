import React from "react";
import { FirstImpression } from "./components/about-want/FirstImpression";
import { Container, Stack, Title } from "@mantine/core";
import PostWhatYouWant from "./components/about-want/PostWhatYouWant";
import ReceivedOffers from "./components/about-want/ReceivedOffers";
import YouCanOffer from "./components/about-want/YouCanOffer";
import WantFeaturesResume from "./components/features/WantFeaturesResume";

const page = () => {
  return (
    <Container bg="var(--mantine-color-body)" fluid>
      <Stack gap={50}>
        <FirstImpression />
        <Title c={"green"} ta={"center"}>Explaining Want</Title>
        <PostWhatYouWant />
        <YouCanOffer/>
        <ReceivedOffers/>
        <Title c={"green"} ta={"center"}>Want Features</Title>
        <WantFeaturesResume/>
      </Stack>
    </Container>
  );
};

export default page;
