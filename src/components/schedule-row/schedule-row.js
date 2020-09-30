import React from "react"
import CustomButton from "../custombutton/custombutton"

const days = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье"
}

const ScheduleRow = ({ subject }) => {
  return (
    <div className="schedule-table" id={subject.id}>
      <div className="schedule-table-cell">{days[subject.day]}</div>
      <div className="schedule-table-cell">
        {subject.startTime}
        <span> - </span>
        {subject.endTime}
      </div>
      <div className="schedule-table-cell text-left">{subject.name}</div>
      <div className="schedule-table-cell">
        {subject.minAge}
        <span> - </span>
        {subject.maxAge}
        {subject.minAge | subject.maxAge && " лет"}
      </div>
      <div className="schedule-table-cell">{subject.teacher}</div>
      <div className="schedule-table-cell text-left">{subject.comment}</div>
      <CustomButton className="edit" type="button">
        Edit
      </CustomButton>
    </div>
  )
}

export default ScheduleRow
