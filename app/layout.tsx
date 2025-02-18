export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Hud do Mestre</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
