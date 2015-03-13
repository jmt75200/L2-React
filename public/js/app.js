/** @jsx React.DOM */

// //Single Component Accessing data via this.props
var Hello = React.createClass({
  render: function(){
    return <div className="container"> 
      Herro {this.props.name}
    </div>;
  }
});

React.render(<Hello name="Clarice..." />, document.getElementById('content'));

// //Owner & Owned
// var Avatar = React.createClass({
//   render: function() {
//     return (
//       <div className="container">
//         <ProfilePic />
//         <ProfileLink username={this.props.username} age={this.props.age} />
//       </div>
//     );
//   }
// });

// var ProfilePic = React.createClass({
//   render: function() {
//     return (
//       <img src={'http://weknowmemes.com/wp-content/uploads/2013/04/i-need-dis-otter.jpg'}/>
//     );
//   }
// });

// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       <a href={'http://devleague.com/'}>
//         {this.props.username}
//       </a>
//     );
//   }
// });

// React.render(<Avatar username="Yo Dawg" age="1" />, document.getElementById('content'));

// TODO multiple components with props and states
//create a simple component
  //render <ul><li> Items
// var TodoList = React.createClass({
//   render: function() {
//     var createItem = function(itemText) {
//       return <li>{itemText}</li>;
//     };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }
// });


// // //create a stateful component
//   //contains all states of the app
// var TodoApp = React.createClass({
  
//   //starting state
//   getInitialState: function() {
//     return {items: [], text: ''};
//   },

//   //change the value of the input
//   onChange: function(x) {
//    this.setState({text: x.target.value});
//   },

//   //on submit add items to initial state
//   handleSubmit: function(y) {
//     y.preventDefault();
//     var nextItems = this.state.items.concat([this.state.text]);
//     var nextText = '';
//     this.setState({items: nextItems, text: nextText});
//   },

//   //render entire app
//   render:function(){
//     return (
//       <div className="container">
//         <h1>ToDo React</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button>{'Add ' + (this.state.items.length + 1)}</button>
//         </form>
//         <TodoList items={this.state.items} />
//       </div>
//     );
//   }
// });

// React.render(<TodoApp />, document.getElementById('content'));



