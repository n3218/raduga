import React, { useState } from "react"

import CustomInput from "../../components/custominput/custominput"
import CustomButton from "../../components/custombutton/custombutton"
import "./schedule.scss"
import Layout from "../../components/layout/layout"
import { createClassDocument, getClasses } from "../../firebase/firebase.utils"
import { useEffect } from "react"

const Schedule = () => {
  const initialState = {
    day: "",
    startTime: "",
    endTime: "",
    title: "",
    minAge: "",
    maxAge: "",
    teacher: "",
    comment: ""
  }

  const initialSchedule = {
    classes: []
  }

  const [state, setState] = useState(initialState)
  const [schedule, setSchedule] = useState(initialSchedule)

  const res = async () => {
    try {
      const response = await getClasses()
      setSchedule({ classes: [...response] })
    } catch (err) {
      console.log("error fetching classes getClasses. ", err)
    }
  }

  useEffect(() => {
    res()
  }, [])

  const handleChange = e => {
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("handleSubmit", state)
    createClassDocument(state)
    setSchedule({ classes: [...schedule.classes, state] })
    setState(initialState)
  }

  // const sortedArr = schedule.classes.sort((a, b) => {
  //   var valA = a.day
  //   var valB = b.day
  //   if (valA < valB) {
  //     return -1
  //   } else if (valA > valB) {
  //     return 1
  //   }
  //   return 0
  // })

  const editClass = e => "contentEditable suppressContentEditableWarning"

  // onBlur={e => editClass(field, e.target.innerText, item.aptId)}

  return (
    <Layout title="Schedule">
      <table className="scheduleTable">
        <thead>
          <tr>
            <th>День недели</th>
            <th>Время</th>
            <th>Название класса</th>
            <th>возраст</th>
            <th>Учитель</th>
            <th>Примечания</th>
          </tr>
        </thead>
        <tbody>
          {schedule.classes.map((doc, i) => (
            <tr key={i}>
              <td>{doc.day}</td>
              <td>
                {doc.startTime} - {doc.endTime}
              </td>
              <td className="text-left">{doc.title}</td>
              <td>{doc.minAge && doc.maxAge && `${doc.minAge} - ${doc.maxAge} лет`}</td>
              <td>{doc.teacher && doc.teacher}</td>
              <td className="text-left">
                {doc.comment && doc.comment} <button onClick={editClass(doc)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} className="addClassForm">
        <div className="inputgroup">
          <select value={state.day} onChange={handleChange} name="day" required>
            <option value="1">Понедельник</option>
            <option value="2">Вторник</option>
            <option value="3">Среда</option>
            <option value="4">Четверг</option>
            <option value="5">Пятница</option>
            <option value="6">Суббота</option>
            <option value="7">Воскресенье</option>
          </select>
          <label htmlFor="Day" className="special label">
            Day
          </label>
        </div>
        <CustomInput label="Start Time" handleChange={handleChange} name="startTime" type="time" value={state.startTime} required />
        <CustomInput label="End Time" handleChange={handleChange} name="endTime" type="time" value={state.endTime} required />
        <CustomInput label="Title" handleChange={handleChange} name="title" type="text" value={state.title} required />
        <CustomInput label="min Age" handleChange={handleChange} name="minAge" type="number" value={state.minAge} />
        <CustomInput label="max Age" handleChange={handleChange} name="maxAge" type="number" value={state.maxAge} />
        <CustomInput label="Teacher" handleChange={handleChange} name="teacher" type="text" value={state.teacher} />
        <CustomInput label="Comment" handleChange={handleChange} name="comment" type="text" value={state.comment} />
        <CustomButton type="submit">Add </CustomButton>
      </form>
    </Layout>
  )
}

export default Schedule
