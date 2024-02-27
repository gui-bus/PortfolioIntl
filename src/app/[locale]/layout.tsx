import { Montserrat } from "next/font/google";
import "../globals.css";
import { getTranslations } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/common/header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/common/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <main className="bg-gradient-to-b from-[#f8f8f8] to-[#f5f5f5] dark:from-background dark:to-muted/30">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
