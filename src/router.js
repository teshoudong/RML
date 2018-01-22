import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import 'whatwg-fetch';

class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: null
        };
        // this.lazyload();
    }

    // lazyload() {
    //     fetch(Bundle.src)
    //         .then(response => {
    //             return response.text();
    //         }).then(res => {
    //             console.log(res);
    //         });
    // }

    render() {
        return this.state.component;
    }
}

class RMLRoute extends React.Component {
    constructor(props) {
        super(props);
        this.newProps = Object.assign({}, this.props);
    }

    getTemplate(name) {
        return $RMLMain[`$${name}`];
    }

    render() {
        if (this.props.template) {
            this.newProps.component = this.getTemplate(this.props.template);
        }
        // } else if (this.props.lazyload) {
        //     Bundle.src = this.props.lazyload;
        //     this.newProps.component = Bundle;
        // }
        return <Route {...this.newProps}>{this.props.children}</Route>;
    }
}

RMLRoute.propTypes = {
    template: PropTypes.string,
    lazyload: PropTypes.string
};

window.Router = Router;
window.Route = RMLRoute;
window.Link = Link;
window.Switch = Switch;
