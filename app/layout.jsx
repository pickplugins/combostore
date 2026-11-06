import { Geist, Geist_Mono, DM_Sans, Figtree, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import TikTokPixel from '@/components/analytics/TikTokPixel';
import FacebookPixel from '@/components/analytics/FacebookPixel';
import { AuthProvider } from "../components/auth-context";
import ExtensionsRuntime from "../components/ExtensionsRuntime";
import NextTopLoader from 'nextjs-toploader';
import Script from "next/script";
import { getSettings } from "@/lib/getSettings";
import TemplateThemeStyle from "@/components/TemplateThemeStyle";






const settings = await getSettings();

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

/*
	Fonts template blocks can opt into through font-[family-name:var(--font-...)].
	preload is off because only some templates use them: a browser fetches these
	files only on pages that actually render with them.
*/
const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	preload: false,
});

const figtree = Figtree({
	variable: "--font-figtree",
	subsets: ["latin"],
	preload: false,
});

const hindSiliguri = Hind_Siliguri({
	variable: "--font-hind-siliguri",
	subsets: ["latin", "bengali"],
	weight: ["300", "400", "500", "600", "700"],
	preload: false,
});

export const metadata = {
	title: "",
	description: "",
	icons: {
		icon: "/favicon.png",
	},
};



export default function RootLayout({ children }) {

	/*
		GA and Clarity used to load on every page even with no ID set, requesting
		`?id=undefined`. Now each needs a well-formed ID (it is written into an
		inline script) and must not be switched off. `enabled !== false` rather
		than `=== true`: the checkbox was ignored until now, so stores that saved
		an ID without ever ticking it keep their analytics; unticking it - which
		stores `false` - turns the script off.
	*/
	var gaSettings = settings?.apiKeys?.googleAnalytics;
	var GA_ID = gaSettings?.enabled !== false && /^(G|UA|AW|GT)-[A-Z0-9-]+$/i.test((gaSettings?.id || "").trim())
		? gaSettings.id.trim()
		: null;
	var mcSettings = settings?.apiKeys?.microsoftClarity;
	var MC_ID = mcSettings?.enabled !== false && /^[a-z0-9]+$/i.test((mcSettings?.id || "").trim())
		? mcSettings.id.trim()
		: null;
	var FacebookPixel_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
	var TikTokpixelId = settings?.apiKeys?.tikTokPixel?.pixel_id

	/*
		Google Tag Manager, from Settings → API Keys. Loaded only while the item
		is enabled, and only for a well-formed container ID: the ID is written
		into an inline script, so anything else could inject code.
	*/
	var gtmSettings = settings?.apiKeys?.googleTagManager;
	var GTM_ID = gtmSettings?.enabled && /^GTM-[A-Z0-9]+$/i.test(gtmSettings?.id || "")
		? gtmSettings.id.toUpperCase()
		: null;




	return (
		<html lang="en">
			<head>
				{/* The site template's fonts and colors (Template Settings), behind font-heading, bg-primary and the other template classes. */}
				<TemplateThemeStyle />

				{/* Facebook Pixel Script */}
				{FacebookPixel_ID && (
					<FacebookPixel pixelId={FacebookPixel_ID} />
				)}

				{TikTokpixelId && (
					<TikTokPixel
						pixelId={TikTokpixelId}
					/>
				)}



				{/* Google Tag Manager */}
				{GTM_ID && (
					<Script id="gtm-init" strategy="afterInteractive">
						{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
					</Script>
				)}

				{/* Google Analytics */}
				{GA_ID && (
					<>
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
					</>
				)}

				{/* Microsoft Clarity */}
				{MC_ID && (
					<Script id="clarity-init" strategy="afterInteractive">
						{`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${MC_ID}");`}
					</Script>
				)}






			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${figtree.variable} ${hindSiliguri.variable} antialiased `}>
				{/* Google Tag Manager (noscript) */}
				{GTM_ID && (
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
				)}
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
