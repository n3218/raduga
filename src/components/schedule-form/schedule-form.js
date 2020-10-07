import React from "react"
import { useMutation } from "@apollo/react-hooks"
import CustomInput from "../custominput/custominput"
import CustomButton from "../custombutton/custombutton"
import { ADD_SUBJECT, GET_SCHEDULE, GET_PROGRAMS } from "../../graphql/queries"

const ScheduleForm = () => {
  const [addSubject] = useMutation(ADD_SUBJECT)

  const handleSubmit = e => {
    e.preventDefault()
    const { name, programId, day, startTime, minAge, maxAge, teacher, comment, isFull, online } = e.target.elements
    console.log("name: ", name.value, "programId: ", programId.value, "day: ", day.value, "startTime: ", startTime.value, "minAge: ", minAge.value, "maxAge: ", maxAge.value, "teacher: ", teacher.value, "comment: ", comment.value, "isFull: ", isFull.value, "online: ", online.value)

    addSubject({
      variables: {
        subject: {
          name: name.value,
          programId: parseInt(programId.value),
          day: parseInt(day.value),
          startTime: startTime.value,
          minAge: parseFloat(minAge.value),
          maxAge: parseFloat(maxAge.value),
          teacher: teacher.value,
          comment: comment.value,
          isFull: parseInt(isFull.value),
          online: parseInt(online.value)
        }
      },
      refetchQueries: [{ query: GET_SCHEDULE }]
    })
  }
  return (
    <form className="schedule-table" onSubmit={e => handleSubmit(e)}>
      <div className="inputgroup">
        <select name="day" required>
          <option>День недели</option>
          <option value={1}>Понедельник</option>
          <option value={2}>Вторник</option>
          <option value={3}>Среда</option>
          <option value={4}>Четверг</option>
          <option value={5}>Пятница</option>
          <option value={6}>Суббота</option>
          <option value={7}>Воскресенье</option>
        </select>
        <label htmlFor="Day" className="">
          Day
        </label>
      </div>
      <div>
        <CustomInput placeholder="Start Time" label="Start Time" name="startTime" type="text" required />
      </div>
      <div>
        <CustomInput placeholder="Subject" label="Subject" name="name" type="text" required />
      </div>
      <div className="double-input">
        <CustomInput label="min Age" name="minAge" type="number" step="0.5" defaultValue={null} />
        <CustomInput label="max Age" name="maxAge" type="number" step="0.5" defaultValue={null} />
      </div>
      <div>
        <CustomInput label="Program" name="programId" type="number" defaultValue={1} />
      </div>
      <div>
        <CustomInput placeholder="Teacher" label="Teacher" name="teacher" type="text" defaultValue="" />
      </div>
      <div>
        <CustomInput placeholder="Comment" label="Comment" name="comment" type="text" defaultValue="" />
      </div>
      <div>
        <CustomInput label="Online" name="online" type="checkbox" />
      </div>
      <div>
        <CustomInput label="Full" name="isFull" type="checkbox" />
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
