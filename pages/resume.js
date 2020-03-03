import Layout from '../components/layout';

export default function Resume() {
  return (
    <Layout>
      <div className='bottom-line bottom-padded'>
        <p className='bolded'>Senior Software Engineer - EverQuote Inc. Cambridge, MA. 2/19 - present.</p>
        <p>Building company-wide analytics platform, piping and transforming data from ~1000 different sources to extract business value. Created Everflow, a system to schedule and monitor data pipelines, used by 5 teams (<i>Python, Airflow, Terraform, Ansible, AWS, Snowflake, dbt, Sqoop</i>).</p>
        <p>Implemented Move-My-Data, a web app for self-serve scheduled data transfer, used by 10+ analyst teams to keep 160+ data sources up-to-date in a data lake (<i>Django, React.js, MySQL, PostgreSQL, Docker, CircleCI, Kubernetes, Databricks</i>).</p>
        <p className='bolded'>Software Engineer - EverQuote Inc. Cambridge, MA. 5/18 - 2/19.</p>
        <p>Designed and built Orienteer, a web app that geographically visualizes sales inventory, used daily by 50+ sales staff (<i>Node.js, React.js, Express.js, MySQL, Kubernetes, CloudBuild</i>).</p>
        <p>Created Salesforce Data Cycle, a system of ETL pipelines between Salesforce and internal databases. Wrote and maintained a collection of 100+ reporting scripts to support in-house analyst teams (<i>Python, Airflow, MySQL, PostgreSQL</i>).</p>
        <p className='bolded'>Sales Engineer - InterSystems Corporation. Cambridge, MA. 8/17 - 5/18.</p>
        <p>Built proofs of concept and technical demonstrations for application and solution partners; established a repository for the demos (<i>Docker, React.js, Angular.js, InterSystems IRIS</i>).</p>
        <p className='bolded'>Software Development Intern - InterSystems Corporation. Cambridge, MA. 5/16 - 8/16.</p>
        <p>Implemented features for the internal HR/finance web app, presented results in front of 100+ people (<i>Javascript, HTML, CSS, Zen, InterSystems Caché</i>).</p>
      </div>
      <div className='bottom-line bottom-padded top-padded'>
        <p className='bolded'>Language Tables App. Middlebury, VT. 9/16 - 5/17.</p>
        <p>Created and productionized a single-page web app for the Language Tables lunch program at Middlebury College, in a 3-person team. The app automates table allocation, tracks and reports attendance, handles sign-up and check-in of 120+ students daily. Wrote a senior thesis on rationale and system architecture. (<i>React.js, Express.js, Node.js, MongoDB</i>).</p>
      </div>
      <div>
        <p className='bolded top-padded'>Middlebury College, 2017. Magna Cum Laude. Phi Beta Kappa Honors.</p>
        <p>B.A. in Computer Science (Highest Honors) and Economics. GPA: 3.92/4.<br/>Tutor for Data Structures and Computer Architecture courses (<i>Java, Linux, OS</i>).</p>
      </div>
      <style jsx>{`
        .bolded {
          font-weight: bold;
        }
        .bottom-padded {
          padding-bottom: 1em;
        }
        .top-padded {
          padding-top: 1em;
        }
      `}</style>
    </Layout>
  );
}
