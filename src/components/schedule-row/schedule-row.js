import React from "react"
import CustomButton from "../custombutton/custombutton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faEdit, faWifi } from "@fortawesome/free-solid-svg-icons"

const days = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье"
}

const ScheduleRow = ({ subject, onClickHandler }) => {
  // const [deleteSubject] = useMutation(DELETE_SUBJECT)

  // const onClickHandler = () => {
  //   console.log("onClickHandler: ", subject.id)

  //   deleteSubject({
  //     variables: { id: subject.id },
  //     refetchQueries: [{ query: GET_SCHEDULE }]
  //   })
  // }

  return (
    <div className="schedule-table" id={subject.id}>
      <div className="schedule-table-cell">{days[subject.day]}</div>
      <div className="schedule-table-cell">{subject.startTime}</div>
      <div className="schedule-table-cell">{subject.name}</div>
      <div className="schedule-table-cell">
        {subject.minAge > 0 && subject.minAge}
        {subject.minAge > 0 && subject.maxAge > 0 && <span> - </span>}
        {subject.maxAge > 0 && subject.maxAge}
        {subject.minAge + subject.maxAge > 0 && " лет"}
      </div>
      <div className="schedule-table-cell">{subject.program.name}</div>
      <div className="schedule-table-cell">{subject.teacher}</div>
      <div className="schedule-table-cell">{subject.comment}</div>
      <div className="schedule-table-cell">{subject.online && <FontAwesomeIcon icon={faWifi} title="on-line" />}</div>
      <div className="schedule-table-cell">{subject.isFull && "full"}</div>
      <div>
        <CustomButton className="edit" type="button" title="Edit">
          <FontAwesomeIcon icon={faEdit} />
        </CustomButton>
        <CustomButton className="delete" type="button" onClick={onClickHandler} title="Delete">
          <FontAwesomeIcon icon={faTrashAlt} />
        </CustomButton>
      </div>
    </div>
  )
}

export default ScheduleRow
