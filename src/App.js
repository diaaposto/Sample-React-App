import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './pages/List'
import Form from './pages/Form'

class App extends Component {
  state = {
    page: 'list',
    students: [
      {
        id: 1,
        firstName: 'Leana',
        lastName: 'Vitar',
      },
    ],
  }

  handleAddStudent = () => this.setState({ page: 'student' });

  render() {
    let page;

    switch (this.state.page) {
      case 'student':
        page = (<Form />);
        break;

      default:
        page = (<List
          students={this.state.students}
          addStudent={this.handleAddStudent}
        />);
    }

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
