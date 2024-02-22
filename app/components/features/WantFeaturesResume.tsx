import { Button, Flex, Group, Paper, Stack, Title } from "@mantine/core";
import {
  IconBooks,
  IconCar,
  IconDeviceGamepad2,
  IconDevicesPc,
  IconHome,
  IconMapPin,
  IconMusic,
  IconPaint,
  IconPaw,
  IconPlant,
  IconSchool,
  IconShirt,
  IconSofa,
  IconSwimming,
  IconTool,
  IconWashMachine,
} from "@tabler/icons-react";
import React from "react";
import classes from "../../../public/css/features/WantFeaturesResume.module.css";

const WantFeaturesResume = () => {
  return (
    <Stack justify="center">
      <Flex
        gap={100}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Title maw={200}>Multiple Categories, just one platform</Title>
        <Group maw={1000}>
          <Paper className={classes.categoriesPaper} withBorder>
            <Group gap={"xl"} justify="center">
              <Button color="green" variant="light" leftSection={<IconCar />}>
                Vehicles
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconSchool />}
              >
                Education
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconDevicesPc />}
              >
                Electronics
              </Button>
              <Button color="green" variant="light" leftSection={<IconHome />}>
                Properties
              </Button>
              <Button color="green" variant="light" leftSection={<IconSofa />}>
                Furniture & decoration
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconWashMachine />}
              >
                Home Appliances
              </Button>
              <Button color="green" variant="light" leftSection={<IconBooks />}>
                Books
              </Button>
              <Button color="green" variant="light" leftSection={<IconMusic />}>
                Musical instruments
              </Button>
              <Button color="green" variant="light" leftSection={<IconTool />}>
                Tools
              </Button>
              <Button color="green" variant="light" leftSection={<IconPlant />}>
                Garden
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconSwimming />}
              >
                Sports
              </Button>
              <Button color="green" variant="light" leftSection={<IconShirt />}>
                Fashion
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconDeviceGamepad2 />}
              >
                Gaming
              </Button>
              <Button color="green" variant="light" leftSection={<IconPaw />}>
                Pets
              </Button>
              <Button color="green" variant="light" leftSection={<IconPaint />}>
                General Services
              </Button>
            </Group>
          </Paper>
        </Group>
        <Flex
        gap={100}
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Title maw={200}>
          A platform accessible from anywhere in the world
        </Title>
        <Group maw={1000}>
          <Paper className={classes.categoriesPaper} withBorder>
            <Group gap={"xl"} justify="center">
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Washington D.C., USA
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Ciudad de México, MEX
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Brasilia, BRA
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Ottawa, CAN
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Buenos Aires, ARG
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Canberra, AUS
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Beijing, CHN
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Moscow, RUS
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                New Delhi, IND
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Tokyo, JPN
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                London, UK
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Paris, FRA
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Berlin, GER
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Rome, ITA
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Madrid, ESP
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Cairo, EGY
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Bogotá, COL
              </Button>
              <Button
                color="green"
                variant="light"
                leftSection={<IconMapPin />}
              >
                Jakarta, IDN
              </Button>
            </Group>
          </Paper>
        </Group>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default WantFeaturesResume;
