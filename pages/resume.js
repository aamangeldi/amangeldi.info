import Layout from '../components/layout';

export default function Resume() {
  return (
    <Layout>
      <div className='bottom-line padded-bottom'>
        <div>
          <p className='bolded'>Harvard Business School, Harvard School of Engineering and Applied Sciences, 2026 (expected).</p>
          <p>Dual Degree MBA/MS: Engineering Sciences.</p>
        </div>
        <div className='padded-top-element'>
          <p className='bolded'>Middlebury College, 2017. Magna Cum Laude. Phi Beta Kappa Honors.</p>
          <p>BA in Computer Science (Highest Honors) and Economics. GPA: 3.92/4.<br/>Tutor for Data Structures and Computer Architecture courses.</p>
        </div>
      </div>
      <div className='bottom-line padded-bottom padded-top'>
        <div>
          <p className='bolded'>Software Development Engineer II - Twitch. San Francisco, CA. 9/21 - 7/24.</p>
          <p>Most recently: machine learning infrastructure.</p>
          <p>Previously: builder products and operational excellence. Think: insights into company-wide availability, latency, security, engineering standards.</p>
        </div>
        <div className='padded-top-element'>
          <p className='bolded'>Software Development Engineer II - Amazon. Sunnyvale, CA. 6/20 - 9/21.</p>
          <p>Building internal tooling and extensions for the Product Lifecycle Management system in the Devices organization (also known as Lab126).</p>
        </div>
        <div className='padded-top-element'>
          <p className='bolded'>Senior Software Engineer - EverQuote Inc. Cambridge, MA. 2/19 - 6/20.</p>
          <p>Built a company-wide data analytics platform that includes piping and transforming data from ~1000 different sources to extract business value.</p>
          <p>Created Everflow, a system to schedule and monitor data pipelines, used by 5 teams.</p>
          <p>Implemented Move-My-Data, a web app for self-serve scheduled data transfer, used by 10+ analyst teams to keep 160+ data sources up-to-date in a data lake.</p>
        </div>
        <div className='padded-top-element'>
          <p className='bolded'>Software Engineer - EverQuote Inc. Cambridge, MA. 5/18 - 2/19.</p>
          <p>Designed and built Orienteer, a web app that geographically visualizes sales inventory, used daily by 50+ sales staff.</p>
          <p>Created Salesforce Data Cycle, a system of ETL pipelines between Salesforce and internal databases. Wrote and maintained a collection of 100+ reporting scripts to support in-house analyst teams.</p>
        </div>
        <div className='padded-top-element'>
          <p className='bolded'>Sales Engineer - InterSystems Corporation. Cambridge, MA. 8/17 - 5/18.</p>
          <p>Built proofs of concept and technical demonstrations for application and solution partners; established a repository for the demos.</p>
        </div>
        <div className='padded-top-element'>
          <p className='bolded'>Software Development Intern - InterSystems Corporation. Cambridge, MA. 5/16 - 8/16.</p>
          <p>Implemented features for the internal HR/finance web app, presented results in front of 100+ people.</p>
        </div>
      </div>
      <div>
        <p className='bolded padded-top'>Language Tables App. Middlebury, VT. 9/16 - 5/17.</p>
        <p>Created and productionized a single-page web app for the Language Tables lunch program at Middlebury College, in a 3-person team. The app automates table allocation, tracks and reports attendance, handles sign-up and check-in of 120+ students daily. Wrote senior thesis on rationale and system architecture.</p>
      </div>
      <style jsx>{`
        .bolded {
          font-weight: bold;
        }
        .padded-bottom {
          padding-bottom: 1em;
        }
        .padded-top-element {
          padding-top: 0.25em;
        }
        .padded-top {
          padding-top: 1em;
        }
      `}</style>
    </Layout>
  );
}
