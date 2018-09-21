import React from 'react'

import Header from '../components/Header'

export default class Form extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />

        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value=""
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value=""
          />

          <input
            type="submit"
            value="Save"
        </form>
      </React.Fragment>
    );
  }
}
