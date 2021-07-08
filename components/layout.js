import Head from "next/head";
import Header from './header';

const Layout = props => (
  <div>
    <Head>
      <title>amangeldi.info</title>
    </Head>
    <Header />
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
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: 0;
      }
      .bottom-line {
        border-bottom: 1px solid #9b9b9b;
      }
      .padded-left-small {
        padding-left: 3em;
      }
      .padded-right-small {
        padding-right: 3em;
      }
      .wrapper-outer {
        display: flex;
        justify-content: center;
      }
      .wrapper-inner {
        margin-top: 3em;
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 3em;
        padding-right: 3em;
        width: 50em;
      }
    `}</style>
  </div>
);

export default Layout;
