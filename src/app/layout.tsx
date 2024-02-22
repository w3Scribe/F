import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Newsletter sign-up form with success message | frontend mentor | sudhir gadpayle | online",
  description:
    "This project is a responsive, user-friendly newsletter sign-up form, built as part of a Frontend Mentor challenge. It showcases a modern and interactive user interface, designed with Tailwind CSS for utility-first styling.The application is built using React, a popular JavaScript library for building user interfaces, and Next.js, a React framework that enables features such as server-side rendering and generating static websites for React based web applications.The form includes validation and success messages to enhance user experience. Upon successful form submission, users are greeted with a success message, providing immediate and clear feedback.App Router is used for managing and navigating between different components or pages in the application, making the user experience seamless and intuitive.Framer Motion, a production-ready motion library for React, is used to add smooth and natural animations to the form and success messages, making the application more engaging and visually appealing.",
  keywords: [
    "Newsletter Sign-Up",
    "Email Subscription",
    "Online Newsletters",
    "Frontend Mentor",
    "sudhir gadpayle",
    "suraj gadpayle",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
