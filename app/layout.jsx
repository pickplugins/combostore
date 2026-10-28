import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TikTokPixel from '@/components/analytics/TikTokPixel';
import FacebookPixel from '@/components/analytics/FacebookPixel';
import { AuthProvider } from "../components/auth-context";
import ExtensionsRuntime from "../components/ExtensionsRuntime";
import NextTopLoader from 'nextjs-toploader';
import Script from "next/script";
import { getSettings } from "@/lib/getSettings";






const settings = await getSettings();

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "",
	description: "",
	icons: {
		icon: "/favicon.png",
	},
};



export default function RootLayout({ children }) {

	var GA_ID = settings?.apiKeys?.googleAnalytics?.id;
	var MC_ID = settings?.apiKeys?.microsoftClarity?.id;
	var FacebookPixel_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
	var TikTokpixelId = settings?.apiKeys?.tikTokPixel?.pixel_id




	return (
		<html lang="en">
			<head>
				{/* Facebook Pixel Script */}
				{FacebookPixel_ID && (
					<FacebookPixel pixelId={FacebookPixel_ID} />
				)}

				{TikTokpixelId && (
					<TikTokPixel
						pixelId={TikTokpixelId}
					/>
				)}



				{/* Google Analytics */}
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				/>
				<Script id="gtag-init" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
				</Script>
				<Script id="clarity-init" strategy="afterInteractive">
					{`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${MC_ID}");`}
				</Script>






			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
				<AuthProvider>
					<NextTopLoader
						color="#1b0e9f"
						initialPosition={0.08}
						crawlSpeed={200}
						height={2}
						crawl={true}
						showSpinner={false}
						easing="ease"
						speed={200}
					/>



					{/* Renders nothing. It is where the extensions' runtime
					    components live, so an extension can do work that is not
					    tied to a screen or a block - see
					    components/ExtensionsRuntime.jsx. */}
					<ExtensionsRuntime />

					<div>{children}</div>

				</AuthProvider>








			</body>
		</html>
	);
}
