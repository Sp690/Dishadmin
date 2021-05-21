import React from 'react';

//Provider/Container React Component
class BookCard extends React.Component {
  render() {
    return (
      <div className="dish-card">
        <img
          style={{width: 250, height: 323}}
          src={this.props.stateProps.picture}
        />
        <h2>{this.props.stateProps.name}</h2>
        <h3>{this.props.stateProps.description}</h3>
        <a href={this.props.stateProps.total_calories}>
        {this.props.stateProps.total_calories}
        </a>
        <br/>
        <i onClick={() => this.props.dispatchAction("PENCIL")} className="icon fa fa-pencil" aria-hidden="true"></i>
        <i onClick={() => this.props.dispatchAction("TRASH")} className="icon fa fa-trash" aria-hidden="true"></i>
        <i onClick={() => this.props.dispatchAction("PLUS")} className="icon fa fa-plus" aria-hidden="true"></i>
      </div>
    )
  }
}

export default dishCard
