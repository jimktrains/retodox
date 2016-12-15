class ToDoList extends React.Component {
  static propTypes () {
    category_id: React.PropTypes.int;
    tasks: React.PropTypes.array;
  }

	constructor() {
		super();
		this.state = {"tasks": []};
	}

	componentDidMount() {
    this.updateList();
  }

  updateList() {
    jQuery.getJSON(`/task.json`,
      {'category_id': this.props.category_id}, 
      res => {
          this.setState(res);
      });
  }

  render () {
    return (
      <div>
        <ul>
            {this.state.tasks.map(item => 
                (<li>
                    <Task id={item.id} 
                          title={item.title} 
                          category_id={this.props.category_id}
                          complete={item.complete}/>
                </li>)
             )}
         </ul>
         <TaskForm list={this} formid="newtask"/>
      </div>
    );
  }
}
