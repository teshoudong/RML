import 'whatwg-fetch';
import PropTypes from 'prop-types';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.fetch();
  }

  fetch() {
    fetch(this.props.url)
      .then((response) => {
        return response.json();
      }).then((res) => {
        this.props.done(res);
      });
  }

  render() {
    return null;
  }
}

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
  done: PropTypes.func
};

window.Fetch = Fetch;