import React from 'react';
import PT from 'prop-types';


function log(number) {
  return number;
}

/* eslint-disable react/forbid-elements */
function Link(props) {
  const { to, children } = props;

  return (
    <a href={ to }>{ children }</a>
  );
}
Link.propTypes = {
  to: PT.string,
  children: PT.node,
};
Link.defaultProps = {
  to: '',
  children: '',
};
/* eslint-enable react/forbid-elements */


function ComponentName(props) {
  const { welcome, isHidden, options } = props;

  const style = {
    color: options.color,
  };

  return (
    <div
      hidden={ isHidden }
      style={ style }
    >
      { welcome }
    </div>
  );
}
ComponentName.propTypes = {
  welcome: PT.string,
  isHidden: PT.bool,
  options: PT.shape({
    color: PT.string,
  }).isRequired,
};
ComponentName.defaultProps = {
  isHidden: false,
  welcome: 'Hello',
};

export class AnotherComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  handleClick() {
    const { number } = this.props;
    log(number);
  }

  render() {
    return (
      <div>
        <ComponentName options={{ color: 'red' }} />
        <Link to="https://google.com">Google</Link>
        <button type="button" onClick={ this.handleClick }>Click</button>
      </div>
    );
  }
}
AnotherComponent.propTypes = {
  number: PT.number.isRequired,
};

export default ComponentName;
