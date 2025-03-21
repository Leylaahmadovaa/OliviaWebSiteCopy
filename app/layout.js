// import { Geist, Geist_Mono } from "next/font/google";
"use client"
import "./globals.css";
import Header from "@components/Header";
import { Provider } from 'react-redux';
import store from '../store';
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });



// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="https://olivia.az/media/favicon/stores/2/36x36.png"/>
        <title>Olivia Beauty &amp; Care</title>
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
        <Header/>
        {children}
        </Provider>
      </body>
    </html>
  );
}
