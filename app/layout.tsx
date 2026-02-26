import "./globals.css";

export const metadata = {
  title: "SCA Voice UI",
  description: "Pipecat Plasma Visualizer UI"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
