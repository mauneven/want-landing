"use client";

import {
  Group,
  Burger,
  Text,
  Drawer,
  ScrollArea,
  Divider,
  rem,
  Stack,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../../../public/css/navigation/HeaderMenu.module.css";
import ThemeChanger from "../themes/ThemeChanger";

const links = [
  { link: "/about", label: "Home" },
  { link: "/pricing", label: "Product" },
  { link: "/learn", label: "Scope" },
  { link: "/community", label: "Team" },
];

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group justify="space-between">
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size="sm"
            hiddenFrom="sm"
          />
          <Group justify="space-between">
            <Text size="xl" fw={700}>
              Want
            </Text>
            <Paper withBorder p={"xs"}>
              <Text fw={900} c={"green"} size="md">
                PREVIEW
              </Text>
            </Paper>
          </Group>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
            <ThemeChanger />
          </Group>
        </Group>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Menu"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider m={0} />
            {items}
            <Divider
              m={0}
              label="Wanna change your theme?"
              labelPosition="center"
            />
            <Stack justify="center" mt={20} align="center" gap={50}>
              <ThemeChanger />
            </Stack>
          </ScrollArea>
        </Drawer>
      </div>
    </header>
  );
}
