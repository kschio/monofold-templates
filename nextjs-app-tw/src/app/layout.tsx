import './globals.css';

export const metadata = {
  title: 'monofold next.js app',
  description: 'Scaffolded by monofold',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
