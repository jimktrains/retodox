class ToDoList extends React.Component {
  static propTypes () {
    tasks: React.PropTypes.array
  }

	constructor() {
		super();
		this.state = {"tasks": []};
	}

	componentDidMount() {
			jQuery.getJSON(`/task.json`, res => {
					this.setState(res);
				});
		}

  render () {
    return (
      <div>
      {this.state.tasks.map(item => 
					<Task id={item.id} 
								title={item.title} 
								completed={item.completed}/>)}
      </div>
    );
  }
}
