import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import { HeaderMenu } from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

export const metadata = {
  title: "Want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            colors: {
              dark: [
                "#e0e0e0",
                "#c2c2c2",
                "#a3a3a3",
                "#858585",
                "#2e2e2e",
                "#2e2e2e",
                "#2e2e2e",
                "#000000",
                "#000000",
                "#000000",
              ],
            },
          }}
        >
          <HeaderMenu />
          <Container fluid>{children}</Container>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
