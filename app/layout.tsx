import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'Want Preview',
  description: 'I have followed setup instructions carefully',
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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}