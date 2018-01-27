import React from 'react';
import PropTypes from 'prop-types';

class OKRTableEntry extends React.Component {
  render() {
    const { KeyResult } = this.props;
    const score = (KeyResult.metrics.current / KeyResult.metrics.total) * 100;
    const fixedScore = Number.parseFloat(score).toFixed(2);

    return (
      <tr>
        <td>{KeyResult.title}</td>
        <td>{fixedScore} %</td>
        <td>
          <span className={['risk-indicator', KeyResult.confidence].join(' ')} />
          {KeyResult.tendency}
        </td>
        <td>{KeyResult.metrics.current}</td>
        <td>{KeyResult.metrics.total}</td>
      </tr>
    );
  }
}

OKRTableEntry.defaultProps = {
  KeyResult: {}
};

OKRTableEntry.propTypes = {
  KeyResult: PropTypes.shape({
    title: PropTypes.string,
    metrics: PropTypes.shape({
      current: PropTypes.number,
      total: PropTypes.number,
      final: PropTypes.number
    })
  }),
};

export default OKRTableEntry;
