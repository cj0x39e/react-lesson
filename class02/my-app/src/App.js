import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function MyTextarea(props) {
  // props.onChange = () => {};
  return (
    <textarea
      className="form-control"
      onChange={props.onChange}
    >
    </textarea>
  )
}

MyTextarea.propTypes = {
  onChange: PropTypes.func
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.remainingCharacters = this.remainingCharacters.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: '',
      photoAdded: false,
      data: {
        text: ''
      }
    }
  };

  remainingCharacters () {
    const {
      photoAdded,
      text
    } = this.state;

    if (photoAdded) {
      return 140 - 23 - text.length;
    } else {
      return 140 - text.length;
    }
  }

  togglePhoto () {
    this.setState({
      photoAdded: true
    })
    // console.log(this.state.photoAdded)

    // this.setState({
    //   photoAdded: !this.state.photoAdded
    // })
    this.setState((preState) => {
      console.log(preState.photoAdded);
      return {
        photoAdded: !preState.photoAdded
      };
    })
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    });

    // let oldData = this.state.data;
    // oldData.text = e.target.value;

    // this.setState({
    //   data: oldData
    // });
  }

  render () {
    const {
      remainingCharacters,
      togglePhoto,
      handleChange
    } = this;

    const {
      text,
      photoAdded,
      // data: {
      //   text: deepText
      // }
    } = this.state;

    return (
      <div className="well clearfix">
        <MyTextarea
          onChange={handleChange}
        >
        </MyTextarea>
        <br/>
        <span>{ remainingCharacters() }</span>
        <button className="btn btn-primary pull-right" disabled={text.length === 0 && !photoAdded}>
          发微博
        </button>
        <button className="btn btn-default pull-right" onClick={togglePhoto}>
          {photoAdded ? "✓ 已添加照片" : "添加照片" }
        </button>
      </div>
    );
  }
}

export default App;
