"use client";

import {
  Card,
  Flex,
  Text,
  Group,
  Stack,
  Title,
  Button,
  Badge,
  Paper,
  Image,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import React from "react";
import classes from "../../../public/css/about-want/PostWhatYouWant.module.css";

const PostWhatYouWant = () => {
  return (
    <Flex gap={100} justify="center" align="center" direction="row" wrap="wrap">
      <Stack maw={200}>
        <Title size="h1" fw={700}>
          Want is the place where people and companies can post what they Want
        </Title>
      </Stack>
      <Paper withBorder p={"xl"} radius={"md"} shadow="xs">
        <Title mb={"xl"}>Feed today</Title>
        <Group gap={20} justify="center" align="center">
          <Card withBorder radius="md" p="lg" shadow="xs">
            <Group justify="center">
              <Image
                radius={"md"}
                className={classes.cardImage}
                src={"./image/iphone15.webp"}
              />
            </Group>
            <Group mt={"xs"} justify="space-between">
              <Text fz="lg" fw={800} c={"green"} size="xl">
                $850
              </Text>
              <Badge size="sm" variant="light" color="green">
                Electronics
              </Badge>
            </Group>

            <Stack gap={0}>
              <Text fw={600} size="xl">
                Need an iPhone 15 Pro
              </Text>
              <Button
                leftSection={<IconMapPin size={20} stroke={2} />}
                mt={5}
                variant="transparent"
                justify="left"
                p={0}
                color="none"
              >
                San Francisco, CA
              </Button>
            </Stack>

            <Group mt="xs" justify="space-between">
              <Button
                variant="outline"
                color="green"
                radius="md"
                style={{ flex: 1 }}
              >
                View more
              </Button>
            </Group>
          </Card>
          <Card withBorder radius="md" p="lg" shadow="xs">
            <Group justify="center">
              <Image
                radius={"md"}
                className={classes.cardImage}
                src={"./image/macbook.png"}
              />
            </Group>
            <Group mt={"xs"} justify="space-between">
              <Text fz="lg" fw={800} c={"green"} size="xl">
                $1,100
              </Text>
              <Badge size="sm" variant="light" color="green">
                Electronics
              </Badge>
            </Group>

            <Stack gap={0}>
              <Text fw={600} size="xl">
                MacBook Pro 1TB
              </Text>
              <Button
                leftSection={<IconMapPin size={20} stroke={2} />}
                mt={5}
                variant="transparent"
                justify="left"
                p={0}
                color="none"
              >
                Palo Alto, CA
              </Button>
            </Stack>

            <Group mt="xs" justify="space-between">
              <Button
                variant="outline"
                color="green"
                radius="md"
                style={{ flex: 1 }}
              >
                View more
              </Button>
            </Group>
          </Card>
          <Card withBorder radius="md" p="lg" shadow="xs">
            <Group justify="center">
              <Image
                radius={"md"}
                className={classes.cardImage}
                src={"./image/tesla.png"}
              />
            </Group>
            <Group mt={"xs"} justify="space-between">
              <Text fz="lg" fw={800} c={"green"} size="xl">
                $850
              </Text>
              <Badge size="sm" variant="light" color="green">
                Vehicles
              </Badge>
            </Group>

            <Stack gap={0}>
              <Text fw={600} size="xl">
                Tesla Model Y
              </Text>
              <Button
                leftSection={<IconMapPin size={20} stroke={2} />}
                mt={5}
                variant="transparent"
                justify="left"
                p={0}
                color="none"
              >
                San Diego, CA
              </Button>
            </Stack>

            <Group mt="xs" justify="space-between">
              <Button
                variant="outline"
                color="green"
                radius="md"
                style={{ flex: 1 }}
              >
                View more
              </Button>
            </Group>
          </Card>
        </Group>
      </Paper>
    </Flex>
  );
};

export default PostWhatYouWant;
