import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          
          <script 
            async
            data-ad-client="ca-pub-1739197497968733" 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
            
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NW5SVPZ')
              `,
            }}
          />
        </Head>
        <body>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NW5SVPZ"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              `,
            }}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}