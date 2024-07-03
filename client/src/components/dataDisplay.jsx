import { connect } from 'react-redux';
import withRouter from './util/withRouter';
import { openModal } from '../actions/modal_actions';

function DataDisplay(props){


  console.log('runnign');
  
  return (
    <div id="data-display">
      <h1>Data Display Component</h1>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    openGameSelectModal: dispatch(openModal({type: 'game'}))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(DataDisplay));