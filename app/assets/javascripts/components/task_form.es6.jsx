class TaskForm extends React.Component {
  static propTypes () {
    formid: React.PropTypes.string;
    list: React.ProtoTypes.node;
  }
  constructor() {
    super();
    // Otherwise `this` in submit will be
    // the element the event occured on
    this.submit = this.submit.bind(this);
  }
  submit (e) {
    let me = this;
    e.preventDefault();
    console.log(e.target);
    jQuery.ajax({
        'url': '/task',
        'data': {'task': {
          'title': e.target.querySelector('input[name=title]').value,
          'complete': false
        } },
        'dataType': 'json',
        'method': 'POST',
        'success': function(e) {
          me.props.list.updateList(); 
          me.refs.form.querySelector('input[name=title]').value = '';
        }
    });
  }
  render () {
    let titleid = this.props.formid + "-title";
    return (
      <form ref="form" onSubmit={this.submit} id={this.props.formid}>
        <label>Title: <input type="text" name="title" id={titleid}/></label>
        <input type="submit"/>
      </form>
    );
  }
}

