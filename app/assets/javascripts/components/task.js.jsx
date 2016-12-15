var Task = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    complete: React.PropTypes.bool
  },

  getInitialState: function() {
    return this.props;
  },
  handleToggle: function(e) {
    this.setState({'complete': !this.state.complete}, function() {
      console.log(this.state);
      jQuery.ajax({
          'url': '/task/' + this.state.id,
          'data': {'task': this.state},
          'dataType': 'json',
          'method': 'PUT'
      });
    });
  },

  render: function() {
    var checked = "";
    var id = "task-" + this.state.id;
    return (
      <div>
        <label>
        {React.createElement('input',{id: id,
                                      "data-task-id": this.state.id,
                                      type: 'checkbox', 
                                      defaultChecked: this.state.complete,
                                      onClick: this.handleToggle})}
        {this.state.title}</label>
      </div>
    );
  }
});
