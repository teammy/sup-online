import { Fira_Code as FontMono, Inter as FontSans , Noto_Sans_Thai  } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontThai = Noto_Sans_Thai({
	weight: ['500'],
	subsets: ['thai'],
  variable: "--font-thai",
});