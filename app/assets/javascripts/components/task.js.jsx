var Task = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    completed: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Completed: {this.props.completed}</div>
      </div>
    );
  }
});
