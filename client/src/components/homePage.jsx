import { connect } from 'react-redux';
import withRouter from './util/withRouter';
import { openModal } from '../actions/modal_actions';

function HomePage(props){

  return (
    <div id="home-page">
      <h1>Welcome to Frame DB</h1>
      <button onClick={props.openGameSelectModal}>Game Select</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    openGameSelectModal: () => dispatch(openModal({type: 'game'}))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(HomePage));