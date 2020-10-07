import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Schedule from "./schedule"
import { GET_SCHEDULE } from "../../graphql/queries"

const ScheduleContainer = () => {
  const { data, loading } = useQuery(GET_SCHEDULE)

  return (
    <>
      {loading && <div className="h1">Loading...</div>}
      {!loading && data.subjects && <Schedule subjects={data.subjects} />}
    </>
  )
}

export default ScheduleContainer
