import Layout from '../components/layout';

export default function Timeline() {
  const facts = {
    '1996': ['Born in Almaty, Kazakhstan.'],
    '2000': ['Moved to Ashgabat, Turkmenistan.'],
    '2004': ['Moved to Kiev, Ukraine.'],
    '2011': ['IB program at St. Clare\'s College in Oxford, UK.'],
    '2012': ['Extended essay on Gulag labor camps.'],
    '2013': ['Graduated from St. Clare\'s.','Flew to the US to study at Middlebury College in Vermont.'],
    '2014': ['Took my first computer science class.'],
    '2016': ['Software development internship at InterSystems in Cambridge, MA.'],
    '2017': ['Built the Language Tables App.',
      'Graduated from Middlebury.',
      'Moved to Cambridge, MA to join InterSystems as a sales engineer.'
    ],
    '2018': ['Joined EverQuote as a software engineer.'],
    '2019': ['Promoted to senior software engineer at EverQuote.'],
    '2020': ['Joined Amazon as a software development engineer II.'],
    '2021': ['Transferred over to Twitch, to work on builder products.']
  }
  const mapFacts = (facts) => {
    return Object.entries(facts).map(([key, value]) => {
      return (
        <div className='row' key={key}>
          <div className='year'><p>{key}</p></div>
          <div className='facts'>{value.map((v) => (<p key={v}>{v}</p>))}</div>
          <style jsx>{`
            .row {
              display: flex;
            }
            .year {
              flex: 10%;
              padding-right: 1em;
            }
            .facts {
              flex: 90%;
            }
          `}</style>
        </div>
      )
    });
  }
  return (
    <Layout>
        {mapFacts(facts)}
    </Layout>
  );
}
