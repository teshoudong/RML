import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';
import './modal.css';

class RMlModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    handleClose() {
        this.setState({
            visible: false
        });
    }

    render() {
        let props = Object.assign({}, this.props, {
            onCancel: () => this.handleClose(),
            visible: this.state.visible
        });

        return (
            <div>
                <Modal {...props}>{this.props.children}</Modal>
            </div>
        );
    }
}

window.Modal = RMlModal;