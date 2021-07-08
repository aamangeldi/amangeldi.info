import Link from 'next/link';

const Header = () => (
  <div className='wrapper-outer header-fixed'>
    <nav className='bottom-line header-wrapper-inner padded-left padded-right'>
      <Link href='/'>
        <a className='padded-left'>Timeline</a>
      </Link>
      <Link href='/resume'>
        <a className='padded-right'>Resume</a>
      </Link>
    </nav>
    <style jsx>{`
      a {
        color: #9b9b9b;
        text-decoration: none;
      }
      .header-fixed {
        background: white;
        position: fixed;
        height: 3em;
        width: 100%;
      }
      .header-wrapper-inner {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        width: 50em;
      }
      .padded-left {
        padding-left: 4em;
      }
      .padded-right {
        padding-right: 4em;
      }
    `}</style>
  </div>
);

export default Header;
