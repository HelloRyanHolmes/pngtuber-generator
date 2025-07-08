export const metadata = {
  title: "Peak PNGtuber Builder",
  description: "Layer images to create your Peak character",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 w-full h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
