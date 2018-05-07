import React from 'react';
import ReactDOM from 'react-dom';
import EmailTemplate from './components/emailTemplate.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  render () {
    return (<div className='email_template'>
      <h1>Email Template Creator</h1>
      <EmailTemplate />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));