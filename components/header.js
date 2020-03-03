import Link from 'next/link';

const Header = () => (
  <div className='wrapper-outer'>
    <nav className='bottom-line header-wrapper-inner wrapper-inner'>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/timeline">
        <a>Timeline</a>
      </Link>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
    </nav>
    <style jsx>{`
      a {
        color: #9b9b9b;
        text-decoration: none;
      }
      .header-wrapper-inner {
        display: flex;
        justify-content: space-between;
        padding-left: 1em;
        padding-right: 1em;
      }
    `}</style>
  </div>
);

export default Header;
