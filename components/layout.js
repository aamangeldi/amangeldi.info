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
      body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: 0;
      }
      .bottom-line {
        border-bottom: 1px solid #9b9b9b;
      }
      .wrapper-outer {
        display: flex;
        justify-content: center;
      }
      .wrapper-inner {
        padding: 1em;
        width: 50em;
        margin-top: 3em;
      }
    `}</style>
  </div>
);

export default Layout;
