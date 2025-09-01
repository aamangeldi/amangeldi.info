import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>Amir Amangeldi</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
    <div className='wrapper-outer'>
      <div className='wrapper-inner'>
        {props.children}
      </div>
    </div>
    <style jsx global>{`
      html {
        overflow-y: scroll;
      }
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        font-size: 16px;
        margin: 0;
        background-color: #ffffff;
        color: #1a1a1a;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .wrapper-outer {
        display: block;
      }
      .wrapper-inner {
        margin: 0;
        padding: 0;
        width: 100%;
      }
    `}</style>
  </div>
);

export default Layout;
