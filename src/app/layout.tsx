import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/react-query";
import "../styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	authors: {
		name: "Victor Micco",
	},
	title: {
		default: "Blue",
		template: "%s | Blue Company",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<QueryClientProvider client={queryClient}>
					{children}
					<Toaster />
				</QueryClientProvider>
			</body>
		</html>
	);
}
