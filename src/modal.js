import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import PropTypes from "prop-types";

class RMlModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };

        this.newProps = Object.assign({}, this.props, {
            onCancel: event => {
                this.props.onCancel && this.props.onCancel(this, event);
                this.close();
            },
            onOk: event => this.props.onOk && this.props.onOk(this, event),
            visible: this.state.visible
        });

        const tmplName = this.newProps.template;
        const childProps = Object.assign({}, this.props, {
            parent: this
        });
        this.children = tmplName ? React.createElement($RMLMain['$' + tmplName], childProps) : this.props.children;
    }

    close() {
        this.setState({
            visible: false
        });
    }

    render() {
        this.newProps.visible = this.state.visible;
        return <Modal {...this.newProps}>{this.children}</Modal>;
    }
}

RMlModal.propTypes = {
    template: PropTypes.string
};

window.Modal = RMlModal;