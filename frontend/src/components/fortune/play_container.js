import { connect } from 'react-redux';
// import PlayPage from './play_page';


const mSTP = ({entities, session}) => {
  return {
    currentUser: entities.users[session.user.id]
  }
}

const mDTP = dispatch => {
  return {
    
  }
}

// export default connect(mSTP, mDTP)(PlayPage);