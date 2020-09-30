import React, { useState } from "react"
import { useEffect } from "react"

import "./schedule.scss"
import { createClassDocument, getClasses } from "../../firebase/firebase.utils"
import CustomInput from "../../components/custominput/custominput"
import CustomButton from "../../components/custombutton/custombutton"
import Layout from "../../components/layout/layout"

export const CustomSpan = ({ field, classId, updateInfo, children }) => {
  return (
    <span contentEditable suppressContentEditableWarning onBlur={e => updateInfo(field, classId, e)}>
      {children}
    </span>
  )
}

const Schedule = () => {
  const initialState = {
    classes: []
  }

  const [state, setState] = useState(initialState)

  const days = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
  }

  useEffect(state => {
    const res = async () => {
      try {
        const response = await getClasses()
        setState({ ...state, classes: [...response] })
      } catch (err) {
        console.log("error fetching classes getClasses. ", err)
      }
    }
    res()
  }, [])

  const handleChange = e => {
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { classId, ...otherData } = state
    createClassDocument(classId, otherData)
    setState(initialState)
  }

  const updateInfo = (field, classId, e) => {
    const { innerText } = e.target
    let tempClasses = state.classes
    let classIndex = tempClasses.findIndex(el => el.classId === classId)
    tempClasses[classIndex][field] = innerText
    setState({ ...state, classes: tempClasses })
  }

  console.log("state", state)

  return (
    <Layout title="Schedule">
      <table className="schedule-table">
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
          {state.classes.map(doc => (
            <tr key={doc.classId}>
              <td>{days[doc.day]}</td>
              <td>
                {doc.startTime} - {doc.endTime}
              </td>
              <td className="text-left">{doc.title}</td>
              <td>
                <CustomSpan field="teacher" classId={doc.classId} updateInfo={updateInfo}>
                  {doc.minAge && "от " + doc.minAge}
                </CustomSpan>
                <CustomSpan field="teacher" classId={doc.classId} updateInfo={updateInfo}>
                  {doc.maxAge && " до " + doc.maxAge}
                </CustomSpan>
                {doc.minAge | doc.maxAge && " лет"}
              </td>
              <td>
                <CustomSpan field="teacher" classId={doc.classId} updateInfo={updateInfo}>
                  {doc.teacher && doc.teacher}
                </CustomSpan>
              </td>
              <td className="text-left">
                <CustomSpan field="comment" classId={doc.classId} updateInfo={updateInfo}>
                  {doc.comment}
                </CustomSpan>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} className="addClassForm">
        <div className="inputgroup">
          <select value={state.day} onChange={handleChange} name="day" required>
            <option>День недели</option>
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
