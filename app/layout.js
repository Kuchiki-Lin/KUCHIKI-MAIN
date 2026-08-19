
"use client"
import "./globals.css";
import "leaflet/dist/leaflet.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

