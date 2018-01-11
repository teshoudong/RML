import 'whatwg-fetch';
import 'es6-promise/auto';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.fetch(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params !== this.props.params || nextProps.url !== this.props.url) {
      this.fetch(nextProps);
    }
  }

  fetch({url, params, onResponse, onDone}) {
    params = params || {};
    onResponse = onResponse || (response => response.json());
    onDone = onDone || (() => {});

    NProgress.start();
    fetch(url, params)
      .then(onResponse)
      .then(res => {
        NProgress.done();
        onDone(res);
      });
  }

  render() {
    return null;
  }
}

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object,
  onResponse: PropTypes.func,
  onDone: PropTypes.func
};

window.Fetch = Fetch;