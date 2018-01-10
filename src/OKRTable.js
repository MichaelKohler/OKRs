import React from 'react';
import PropTypes from 'prop-types';
import OKRTableEntry from './OKRTableEntry';
import './scss/okrtable.scss';

class OKRTable extends React.Component {
  render() {
    const { OKR } = this.props;

    const totals = OKR.keyResults.reduce((totalAccumulator, keyResult) => {
      const countingTotals = totalAccumulator;
      countingTotals.current += keyResult.metrics.current;
      countingTotals.total += keyResult.metrics.total;

      return countingTotals;
    }, {
      current: 0,
      total: 0
    });

    const totalScore = totals.current / totals.total;

    return (
      <section>
        <h2>{OKR.title}</h2>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Score</th>
              <th>Confidence</th>
              <th>Current</th>
              <th>Total</th>
              <th>Final</th>
            </tr>
          </thead>
          <tbody>
            {
              OKR.keyResults.map((KR) => {
                return <OKRTableEntry key={KR.title} KeyResult={KR} />;
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totalScore * 100} %</td>
              <td />
              <td />
              <td />
            </tr>
          </tfoot>
        </table>
      </section>
    );
  }
}

OKRTable.defaultProps = {
  OKR: {}
};

OKRTable.propTypes = {
  OKR: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
};

export default OKRTable;
