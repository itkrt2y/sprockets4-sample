//= require react/dist/react
//= require react-dom/dist/react-dom

class User extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}!!`);
  }
}

window.onload = () => {
  $('#jquery-sample').html('Hello jQuery!');

  ReactDOM.render(
    React.createElement(User, { toWhat: 'React' }, null),
    document.querySelector('#react-sample')
  );
};
