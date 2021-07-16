import React, { useEffect } from 'react';
// Interact component with redux using connect
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';

// Import getLogs action for component use
import { getLogs } from '../../features/logs/logsActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, [getLogs]);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

// Connect takes in 2 things:
// 1. If we want anything from app level state
const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
