import PropTypes from 'prop-types';

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: null
        };
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            children: null
        }, () => {
            this.setState({
                children: this.props.children
            });
        });
    }


    render() {
        return (
            <div>
                <a onClick={e => this.handleClick(e)}>{this.props.label}</a>
                {this.state.children}
            </div>
        );
    }
}

Action.propTypes = {
    label: PropTypes.string.isRequired
};

window.Action = Action;