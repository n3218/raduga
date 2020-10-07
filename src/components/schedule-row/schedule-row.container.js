import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { DELETE_SUBJECT, GET_SCHEDULE } from "../../graphql/queries"
import ScheduleRow from "./schedule-row"

const ScheduleRowContainer = ({ subject }) => {
  const [deleteSubject] = useMutation(DELETE_SUBJECT)

  const onClickHandler = () => {
    console.log("onClickHandler: ", subject.id)

    deleteSubject({
      variables: { id: subject.id },
      refetchQueries: [{ query: GET_SCHEDULE }]
    })
  }

  return <ScheduleRow subject={subject} onClickHandler={onClickHandler} />
}

export default ScheduleRowContainer
