
import "./globals.css";



export const metadata = {
  title: "ZenStreet Assignment",
  description: "Recruitment Process",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
