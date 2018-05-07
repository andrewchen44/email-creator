import React from "react";
import OutputEmail from "./OutputEmail.jsx";

class EmailTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowableVariables: ['name', 'id', 'address'],
      inputVariables: {name: 'Cat', id: 5, address: '123 stripe street'},
      text: ``,
      outputText: ``,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e){
    this.setState({
      text: `${this.state.text}` + "${" + `${e.target.innerText}` + "}",
    })
  }

  handleChange(e){
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    return <div className="template_form">
        <div className="email_fields">
          <div className="input_variables">
            Acceptable Input Variables
            {this.state.allowableVariables.map(variable => {
              return <div onClick={this.handleClick}>{variable}</div>;
            })}
          </div>
          <form className="template_form">
            <div>Email Template</div>
            <textarea onChange={this.handleChange} value={this.state.text} rows="30" cols="30">
            </textarea>
          </form>
          <OutputEmail text={this.state.text} />
        </div>
        <div className="template_buttons">
          <button>Save</button>
        </div>
      </div>;
  }
}

export default EmailTemplate;