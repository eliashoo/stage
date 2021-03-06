import Instructions from '../Components/Instructions';
import {connect} from 'react-redux';
import {toggle_instructions} from '../actions/ui';

const mapStateToProps = (state) => (
    {
      showInstructions:state.control.toggleInstructions,
    }
);

export default connect(mapStateToProps,{toggle_instructions})(Instructions);
