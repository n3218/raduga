import React from "react"
import "./schedule.scss"
import Layout from "../../components/layout/layout"
import ScheduleForm from "../../components/schedule-form/schedule-form"
import { default as ScheduleRow } from "../../components/schedule-row/schedule-row.container"

const Schedule = ({ subjects }) => {
  return (
    <Layout title="Schedule">
      <div className="schedule-table">
        <div className="schedule-table-header">День недели</div>
        <div className="schedule-table-header">Время</div>
        <div className="schedule-table-header">Название класса</div>
        <div className="schedule-table-header">Возраст</div>
        <div className="schedule-table-header">Программа</div>
        <div className="schedule-table-header">Учитель</div>
        <div className="schedule-table-header">Примечания</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {subjects.map(subject => {
        return <ScheduleRow subject={subject} key={subject.id} />
      })}
      <br />

      <ScheduleForm />
    </Layout>
  )
}

export default Schedule
