import React from "react"

import "./schedule.scss"
import Layout from "../../components/layout/layout"
import ScheduleForm from "../../components/schedule-form/schedule-form"
import ScheduleRow from "../../components/schedule-row/schedule-row"

const updatingSubject = "1"
// const updatingSubject = "uTtcK7eX17RV5RNTemVo"

const Schedule = ({ subjects, addSubject }) => {
  return (
    <Layout title="Schedule">
      <div className="schedule-table">
        <div className="schedule-table-header">День недели</div>
        <div className="schedule-table-header">Время</div>
        <div className="schedule-table-header">Название класса</div>
        <div className="schedule-table-header">возраст</div>
        <div className="schedule-table-header">Учитель</div>
        <div className="schedule-table-header">Примечания</div>
      </div>
      {subjects.map(subject => {
        return subject.id !== updatingSubject ? <ScheduleRow subject={subject} key={subject.id} /> : <ScheduleForm subject={subject} key={subject.id} />
      })}
      <br />

      <ScheduleForm addSubject={addSubject} />
    </Layout>
  )
}

export default Schedule
