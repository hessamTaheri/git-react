import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
      event.preventDefault()

      this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
                onChange={this.onInputChange}
              //  we can type just the next line alone or type previous line with onInputChange methode
            // onChange={e => this.setState({term : e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
