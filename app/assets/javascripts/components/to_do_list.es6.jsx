class ToDoList extends React.Component {
  static propTypes () {
    tasks: React.PropTypes.array
  }

	constructor() {
		super();
		this.state = {"tasks": []};
	}

	componentDidMount() {
    this.updateList();
  }

  updateList() {
    jQuery.getJSON(`/task.json`, res => {
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
                          complete={item.complete}/>
                </li>)
             )}
         </ul>
         <TaskForm list={this} formid="newtask"/>
      </div>
    );
  }
}
