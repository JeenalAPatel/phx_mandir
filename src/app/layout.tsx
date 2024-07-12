import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LinkButton } from "@/app/components/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " h-screen overflow-hidden bg-[url(https://lh3.googleusercontent.com/p/AF1QipNb-uMOJGL_EJVc2QxEBQSapTuECaHDS6onzfpz=s1360-w1360-h1020)]"
        }
      >
        <div className="flex flex-row h-full gap-16">
          <div className="border-r-solid  text-2xl flex flex-col gap-4 justify-center basis-[300px] grow-0 shrink-0 overflow-y-auto h-full">
            <LinkButton href={"/events"} text={"Upcoming events"} />
            <LinkButton href={"/timings"} text={"Mandir Timings"} />
            <LinkButton href={"/aboutPhx"} text={"About BAPS Phoenix"} />
            <LinkButton href={"/aboutBAPS"} text={"About BAPS"} />
            <LinkButton href={"/data"} text={"Register"} />
          </div>
          <div className="overflow-y-auto flex-1 pr-16 pt-16">
            <h1 className="text-4xl text-center text-white">
              Welcome to BAPS Phoenix Mandir
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
