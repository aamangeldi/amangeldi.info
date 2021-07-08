import Link from 'next/link';

const Header = () => (
  <div className='wrapper-outer header-fixed'>
    <nav className='bottom-line header-wrapper-inner'>
      <Link href='/'>
        <a className='padded-right-small'>Timeline</a>
      </Link>
      <Link href='/resume'>
        <a className='padded-left-small'>Resume</a>
      </Link>
    </nav>
    <style jsx>{`
      a {
        color: #9b9b9b;
        text-decoration: none;
      }
      .header-fixed {
        background: white;
        height: 3em;
        position: fixed;
        width: 100%;
      }
      .header-wrapper-inner {
        display: flex;
        justify-content: space-between;
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 12em;
        padding-right: 12em;
        width: 50em;
      }
    `}</style>
  </div>
);

export default Header;
