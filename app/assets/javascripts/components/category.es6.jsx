class Category extends React.Component {
  static propTypes () {
  }

	componentDidMount() {
    this.updateList();
  }
  constructor() {
    super();
    this.state = {categories: []};
  }

  updateList() {
    jQuery.getJSON(`/category.json`, res => {
        this.setState(res);
    });
  }

  render() {
    return (
      <div>
        <CategoryForm formid="catform" list={this}/>
        {this.state.categories.map( cat => (
          <div>
            <h1>{cat.title}</h1>
            <ToDoList category_id={cat.id} />
          </div>))}
      </div>
    );
  }
}
