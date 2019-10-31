import React from 'react';
import "./SearchBar.scss";

class SearchBar extends React.Component {
  state = {keyword: ''}
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.keyword);
  }

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onFormSubmit}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for image..."
              value={this.state.keyword}
              onChange={e => this.setState({ keyword: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;