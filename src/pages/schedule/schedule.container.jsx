import React from "react"
import { graphql } from "react-apollo"
import { gql } from "apollo-boost"
import { flowRight } from "lodash"
import Schedule from "./schedule"

const GET_SCHEDULE = gql`
  {
    subjects {
      id
      name
      day
      startTime
      endTime
      minAge
      maxAge
      teacher
      comment
      isFull
      online
      program {
        id
        name
      }
    }
  }
`

const ADD_SUBJECT = gql`
  mutation {
    addSubject(name: "Test-1000", programId: "10", day: 3, startTime: "3:10", endTime: "6:10", minAge: 5, maxAge: 6, teacher: "Masha", comment: "", isFull: false, online: false)
  }
`

const ScheduleContainer = props => {
  console.log("props.data.loading: ", props.data.loading)
  console.log("props: ", props)
  console.log("props.addSubject: ", props.addSubject)
  if (props.data.loading) {
    return <div className="h1">Loading...</div>
  }
  return <Schedule subjects={props.data.subjects} addSubject={props.addSubject} />
}

export default flowRight(graphql(GET_SCHEDULE), graphql(ADD_SUBJECT, { name: "addSubject" }))(ScheduleContainer)
