"use client";

import {
  Card,
  Flex,
  Text,
  Group,
  Stack,
  Title,
  Button,
  Paper,
  Image,
  Avatar,
} from "@mantine/core";
import { IconCircleCheck, IconInfoCircle } from "@tabler/icons-react";
import React from "react";
import classes from "../../../public/css/about-want/PostWhatYouWant.module.css";

const ReceivedOffers = () => {
  return (
    <Flex gap={100} justify="center" align="center" direction="row" wrap="wrap">
      <Stack maw={200}>
        <Title size="h1" fw={700}>
          Where you can find the offers that people and companies make to you.
        </Title>
      </Stack>
      <Paper withBorder p={"xl"} radius={"md"} shadow="xs">
        <Title mb={"xl"}>Received Offers</Title>
        <Group gap={20} justify="center" align="center">
          <Card withBorder radius="md" p="lg" shadow="xs">
            <Group justify="center">
              <Image
                radius={"md"}
                className={classes.cardImage}
                src={"./image/receivedIphone.webp"}
              />
            </Group>
            <Group mt={"lg"} justify="space-between">
              <Text fz="lg" fw={800} c={"green"} size="xl">
                $950
              </Text>
              <Button
                size="xs"
                p={0}
                color="blue"
                variant="light"
                radius={20}
                leftSection={<Avatar src={"./image/tim.jpg"} size={"sm"} />}
              >
                <Text size="sm" fw={500} mr={10}>
                  Tim Cook
                </Text>
              </Button>
            </Group>

            <Stack gap={0} mt={10}>
              <Text fw={600} size="xl">
                iPhone 15 Pro 128GB
              </Text>
              <Text maw={250} fw={600} size="xs" c="dimmed">
                Got this iPhone 15 just recently out of the San Francisco store,
                this is a really good price..
              </Text>
              <Button
                leftSection={<IconInfoCircle size={20} stroke={2} />}
                mt={5}
                variant="transparent"
                justify="left"
                p={0}
                color="none"
              >
                From your post &quoti;Phone 15 Pro...&quot;
              </Button>
            </Stack>

            <Group mt="xs" justify="space-between">
              <Button
                variant="outline"
                color="green"
                radius="md"
                style={{ flex: 1 }}
              >
                Check this offer
              </Button>
            </Group>
          </Card>
          <Card withBorder radius="md" p="lg" shadow="xs">
            <Group justify="center">
              <Image
                radius={"md"}
                className={classes.cardImage}
                src={"./image/receivedMacbook.jpg"}
              />
            </Group>
            <Group mt={"lg"} justify="space-between">
              <Text fz="lg" fw={800} c={"green"} size="xl">
                $1150
              </Text>
              <Button
                size="xs"
                p={0}
                color="yellow"
                variant="light"
                radius={20}
                leftSection={<Avatar src={"./image/ryan.jpg"} size={"sm"} />}
              >
                <Text size="sm" fw={500} mr={10}>
                  Ryan Gosling
                </Text>
              </Button>
            </Group>

            <Stack gap={0} mt={10}>
              <Text fw={600} size="xl">
                MacBook Pro 512GB
              </Text>
              <Text maw={250} fw={600} size="xs" c="dimmed">
                Got this iPhone 15 just recently out of the San Francisco store,
                this is a really good price..
              </Text>
              <Button
                leftSection={<IconInfoCircle size={20} stroke={2} />}
                mt={5}
                variant="transparent"
                justify="left"
                p={0}
                color="none"
              >
                From your post &quoti;MacBook Pro 1TB&quoti;
              </Button>
            </Stack>

            <Group mt="xs" justify="space-between">
              <Button
                variant="outline"
                color="green"
                radius="md"
                style={{ flex: 1 }}
              >
                Check this offer
              </Button>
            </Group>
          </Card>
          <Card withBorder radius="md" p="lg" shadow="xs">
            <Group justify="center">
              <Image
                radius={"md"}
                fit="contain"
                className={classes.cardImage}
                src={"./image/receivedTesla.png"}
              />
            </Group>
            <Group mt={"lg"} justify="space-between">
              <Text fz="lg" fw={800} c={"green"} size="xl">
                $950
              </Text>
              <Button
                size="xs"
                p={0}
                color="red"
                variant="light"
                radius={20}
                leftSection={
                  <Avatar src={"./image/teslaLogo.png"} size={"sm"} />
                }
                rightSection={<IconCircleCheck></IconCircleCheck>}
              >
                <Text size="sm" fw={500} mr={10}>
                  Tesla Store
                </Text>
              </Button>
            </Group>

            <Stack gap={0} mt={10}>
              <Text fw={600} size="xl">
                iPhone 15 Pro 128GB
              </Text>
              <Text maw={250} fw={600} size="xs" c="dimmed">
                Got this iPhone 15 just recently out of the San Francisco store,
                this is a really good price..
              </Text>
              <Button
                leftSection={<IconInfoCircle size={20} stroke={2} />}
                mt={5}
                variant="transparent"
                justify="left"
                p={0}
                color="none"
              >
                From your post &quoti;Tesla Model Y&quoti;
              </Button>
            </Stack>

            <Group mt="xs" justify="space-between">
              <Button
                variant="outline"
                color="green"
                radius="md"
                style={{ flex: 1 }}
              >
                Check this offer
              </Button>
            </Group>
          </Card>
        </Group>
      </Paper>
    </Flex>
  );
};

export default ReceivedOffers;
