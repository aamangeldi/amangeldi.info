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
              Experienced software engineer, currently pursuing a joint MS Engineering + MBA degree at Harvard.
            </p>
            <p className="bio">
              Previously worked at Twitch (most recently on machine learning infrastructure), Amazon, and EverQuote. Studied computer science and economics at Middlebury.
            </p>
            <p className="bio">
              Lately, I've been exploring how AI is changing real-world software engineering workflows: <a href="https://unslop.xyz/blog" target="_blank" rel="noopener noreferrer">unslop.xyz/blog</a>
            </p>
            <div className="links">
              <a href="https://github.com/aamangeldi" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span className="separator">/</span>
              <a href="https://linkedin.com/in/aamangeldi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="separator">/</span>
              <span>amir.[last name] at gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          min-height: 100vh;
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

        .links span:not(.separator) {
          color: #1a1a1a;
          font-weight: 500;
          font-size: 1rem;
        }


        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
            min-height: 100vh;
            align-items: center;
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
            flex-wrap: wrap;
          }

          .profile-photo img {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem 1rem;
          }

          h1 {
            font-size: 1.75rem;
          }

          .bio {
            font-size: 0.95rem;
          }

          .links {
            gap: 0.4rem;
          }

          .links a, .separator, .links span:not(.separator) {
            font-size: 0.9rem;
          }

          .profile-photo img {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </Layout>
  );
}
