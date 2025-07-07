export const metadata = {
  title: "Taco Builder",
  description: "Layer images to create your taco character",
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
