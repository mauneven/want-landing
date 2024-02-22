"use client";
import {
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Grid,
  Stack,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "../../../public/css/about-want/FirstImpression.module.css";

export function FirstImpression() {
  return (
      <Stack justify="center" align="center" mt={20}>
        <Stack>
          <Title className={classes.title}>Redefining Online Commerce</Title>
        </Stack>
        <Group>
            <Title>Want</Title>
        </Group>
      </Stack>
  );
}
