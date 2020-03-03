import Layout from '../components/layout';

export default function Resume() {
  const facts = {
    '1996': ['Born in Almaty, Kazakhstan.'],
    '2000': ['Moved to Ashgabat, Turkmenistan.'],
    '2004': ['Moved to Kiev, Ukraine.'],
    '2011': ['Moved to Oxford, UK, to study the IB program at St. Clare\'s College.'],
    '2013': ['Moved to Middlebury, VT, to study at Middlebury College.'],
    '2014': ['Took my first computer science course.'],
    '2016': ['Software development internship at InterSystems in Cambridge, MA.'],
    '2017': ['Built the Language Tables App.',
      'Graduated from Middlebury.',
      'Moved to Cambridge, MA to join InterSystems as a sales engineer.'
    ],
    '2018': ['Joined EverQuote as a software engineer. Moved in with Elaine.'],
    '2019': ['Promoted to senior software engineer at EverQuote.', 'Adopted two kittens: Cece and Sasha.'],
  }
  const mapFacts = (facts) => {
    return Object.entries(facts).map(([key, value]) => {
      return (
        <div className='row' key={key}>
          <div className='year'><p>{key}</p></div>
          <div className='facts'>{value.map((v) => (<p>{v}</p>))}</div>
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
