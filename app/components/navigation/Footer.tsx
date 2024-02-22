import {
  Group,
  Text,
  Paper,
  Divider,
  Stack,
} from "@mantine/core";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Stack gap={0}>
      <Divider mb={0} mt={120} />
      <Group justify="space-between" align="center" p={20}>
        <Group>
          <Text size="xl" fw={700}>
            Want
          </Text>
          <Paper p={"xs"} withBorder>
            <Text size="xl" fw={900} c={"green"}>
              PREVIEW
            </Text>
          </Paper>
        </Group>
        <Group justify="center">
          <Text c="dimmed">© {currentYear}</Text>
        </Group>
      </Group>
    </Stack>
  );
}
