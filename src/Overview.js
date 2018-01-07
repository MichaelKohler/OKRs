import React from 'react';
import OKRs from './okrs.json';
import OKRTable from './OKRTable';
import './scss/overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="container">
        <section>
          <div className="row" />

          {/* <!-- TODO: make more dynamic with routing? */}
          <h1>2018 - Q1</h1>
          { OKRs['2018'].quarters.Q1.map((OKR) => { return <OKRTable key={OKR.title} OKR={OKR} />; }) }

          <hr />

          <h1>General Yearly OKRs - 2018</h1>
          { OKRs['2018'].general.map((OKR) => { return <OKRTable key={OKR.title} OKR={OKR} />; }) }
        </section>
      </div>
    );
  }
}

export default Overview;
