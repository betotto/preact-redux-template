import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { beginAjaxCallAction, endAjaxCallAction } from './commonActions';

class App extends Component {
  render(props) {
    return (
      <div>
        <p>{props.currentAjaxCalls}</p>
        <button onClick={props.beginAjaxCall}>{'+'}</button>
        <button onClick={props.endAjaxCall}>{'-'}</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentAjaxCalls: state.commonModule.currentAjaxCalls
});

const mapDispatchToProps = dispatch => ({
  beginAjaxCall: () => dispatch(beginAjaxCallAction()),
  endAjaxCall: () => dispatch(endAjaxCallAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
