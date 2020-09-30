import React from "react"
import CustomInput from "../custominput/custominput"
import CustomButton from "../custombutton/custombutton"

const emptySubject = {
  name: "",
  programId: "",
  day: "",
  startTime: "",
  minAge: null,
  maxAge: null,
  teacher: "",
  comment: "",
  isFull: false,
  online: false
}

const ScheduleForm = ({ subject, addSubject }) => {
  !subject && (subject = emptySubject)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <form className="schedule-table" onSubmit={e => handleSubmit(e)}>
      <div className="inputgroup">
        <select defaultValue={subject.day} name="day" required>
          <option>День недели</option>
          <option value="1">Понедельник</option>
          <option value="2">Вторник</option>
          <option value="3">Среда</option>
          <option value="4">Четверг</option>
          <option value="5">Пятница</option>
          <option value="6">Суббота</option>
          <option value="7">Воскресенье</option>
        </select>
        <label htmlFor="Day" className="label">
          Day
        </label>
      </div>

      <div>
        <CustomInput label="Start Time" name="startTime" type="text" defaultValue={subject.startTime} required />
      </div>

      <div>
        <CustomInput label="Title" name="title" type="text" defaultValue={subject.title} required />
      </div>
      <div className="double-input">
        <CustomInput label="min Age" name="minAge" type="number" defaultValue={subject.minAge} />
        <CustomInput label="max Age" name="maxAge" type="number" defaultValue={subject.maxAge} />
      </div>
      <div>
        <CustomInput label="Teacher" name="teacher" type="text" defaultValue={subject.teacher} />
      </div>
      <div>
        <CustomInput label="Comment" name="comment" type="text" defaultValue={subject.comment} />
      </div>
      <div>
        <CustomButton className="save" type="submit">
          Save
        </CustomButton>
      </div>
    </form>
  )
}

export default ScheduleForm
