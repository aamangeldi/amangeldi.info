import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="profile-photo">
              <img src="/profile.jpg" alt="Amir Amangeldi" />
            </div>
          </div>
          <div className="text-section">
            <h1>Amir Amangeldi</h1>
            <p className="bio">
              Software engineer exploring meaningful projects in AI safety research. Currently pursuing MS/MBA Engineering at Harvard.
            </p>
            <p className="bio">
              Previously I was an engineer at Twitch, Amazon, and EverQuote, and studied CS and economics at Middlebury.
            </p>
            <div className="links">
              <a href="mailto:amir.amangeldi@gmail.com">Email</a>
              <span className="separator">/</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              <span className="separator">/</span>
              <a href="https://linkedin.com/in/aamangeldi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="separator">/</span>
              <a href="https://github.com/aamangeldi" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          height: 100vh;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .content-wrapper {
          display: flex;
          align-items: center;
          gap: 4rem;
          width: 100%;
        }

        .profile-section {
          flex-shrink: 0;
        }

        .profile-photo img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
        }

        .text-section {
          flex: 1;
          text-align: left;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .bio {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #4a4a4a;
          margin-bottom: 0.75rem;
          max-width: none;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .links a {
          color: #1a1a1a;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          transition: color 0.2s ease;
        }

        .links a:hover {
          color: #666;
        }

        .links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: #1a1a1a;
          transition: width 0.2s ease;
        }

        .links a:hover::after {
          width: 100%;
        }

        .separator {
          color: #ccc;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .container {
            padding: 3rem 1.5rem;
            min-height: auto;
            align-items: flex-start;
            padding-top: 4rem;
          }

          .content-wrapper {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .text-section {
            text-align: center;
          }

          h1 {
            font-size: 2rem;
          }

          .bio {
            font-size: 1rem;
          }

          .links {
            justify-content: center;
            gap: 0.5rem;
          }

          .profile-photo img {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </Layout>
  );
}
