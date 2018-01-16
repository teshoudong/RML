import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import './modal.css';

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
    }

    close() {
        this.setState({
            visible: false
        });
    }

    render() {
        this.newProps.visible = this.state.visible;
        return <Modal {...this.newProps}>{this.props.children}</Modal>;
    }
}

window.Modal = RMlModal;