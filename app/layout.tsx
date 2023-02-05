import { PropsWithChildren } from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='fr'>
      <head />
      <body>{children}</body>
    </html>
  );
}
