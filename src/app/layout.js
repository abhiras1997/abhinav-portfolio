import "./globals.css";

export const metadata = {
  title: "Abhinav Rastogi",
  description: "Created by Abhinav Rastogi using Next.js 13 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
