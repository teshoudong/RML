import Form from 'antd/lib/form';
import 'antd/lib/form/style/index.css';

class RMLForm extends React.Component {
    constructor(props) {
        super(props);
        this.newProps = Object.assign({}, this.props, {
            onSubmit: event => {
                event.preventDefault();
                const values = this.getValues();
                this.props.onSubmit && this.props.onSubmit({values, event});
            },
            ref: element => {
                this.form = ReactDOM.findDOMNode(element);
            }
        });
    }

    getValues() {
        const elements = this.form.elements;
        const values = {};
        Object.keys(elements).forEach(key => {
            const name = elements[key].name;
            name && (values[name] = elements[name].value);
        });
        return values;
    }

    render() {
        return <Form {...this.newProps}>{this.props.children}</Form>;
    }
}

RMLForm.Item = Form.Item;

window.Form = RMLForm;