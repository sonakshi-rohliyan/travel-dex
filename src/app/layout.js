export const metadata = {
  title: 'Travel PokéDex – Gotta Visit \'Em All!',
  description: 'A personal travel bucket-list styled as a Pokédex',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
