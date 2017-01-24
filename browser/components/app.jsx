import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '../redux/actions/creators';

import Main from './Main';

function mapStateToProps(state) {
    return {
        style: state.controls,
        pip: state.pip,
        chat: state.chat,
        app: state.application
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(creators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
