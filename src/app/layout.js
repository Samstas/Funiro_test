import "../styles/globals.css";
import { Header } from "@/components/layouts/Header";
import { MainContainer } from "@/components/ui/MainContainer";

export const metadata = {
  title: "Funiro",
  description:
    "Funiro is an online store that offers a wide selection of home goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />

        <main>
          <MainContainer>{children}</MainContainer>
        </main>
      </body>
    </html>
  );
}
