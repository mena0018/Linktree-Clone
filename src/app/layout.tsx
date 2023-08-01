import './globals.css';
import { FC, PropsWithChildren } from 'react';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='fr'>
      <head />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};

export default RootLayout;
