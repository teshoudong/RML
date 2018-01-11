import PropTypes from 'prop-types';

class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }
}

Action.propTypes = {
    label: PropTypes.string.isRequired
};

window.Action = Action;