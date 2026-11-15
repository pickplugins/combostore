'use client';

import Script from 'next/script';

/*
	Meta pixel base code.

	It initialises with external_id = the cs_vid cookie (set by proxy.js), the
	same value the server sends with its Conversions API events, so the two
	halves of each event match. cs_vid is 64-char hex, which the pixel treats
	as already hashed. Logged-in customers' email / phone / name are added
	later by <FacebookUserMatching>.
*/
export default function FacebookPixel({ pixelId }) {

  const id = String(pixelId || '').trim();
  if (!/^\d+$/.test(id)) {
    return null;
  }

  return (
    <Script
      id="facebook-pixel"
      strategy="afterInteractive"
    >
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
        t=b.createElement(e);
        t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}
        (window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        (function(){
          var m = document.cookie.match(/(?:^|;\\s*)cs_vid=([a-f0-9]{64})/);
          fbq('init', '${id}', m ? { external_id: m[1] } : {});
        })();
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
