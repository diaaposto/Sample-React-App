import React, { Component, Fragment } from 'react'

import Header from '../components/Header'

export default ({ students, addStudent }) => (
  <Fragment>
    <Header />

    <div>
      {students && students.map((student) => (
        <div key={student.id}>
          {student.firstName} {student.lastName}
        </div>
      ))}
    </div>

    <button onClick={addStudent}>
      Add a student
    </button>
  </Fragment>
)
