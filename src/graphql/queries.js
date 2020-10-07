import { gql } from "apollo-boost"

export const GET_PROGRAMS = gql`
  query {
    programs {
      id
      name
    }
  }
`

export const GET_SCHEDULE = gql`
  query {
    subjects {
      id
      name
      day
      startTime
      endTime
      minAge
      maxAge
      teacher
      comment
      isFull
      online
      program {
        id
        name
      }
    }
  }
`

export const ADD_SUBJECT = gql`
  mutation AddSubject($subject: AddSubjectInput) {
    addSubject(subject: $subject)
  }
`
export const UPDATE_SUBJECT = gql`
  mutation UpdateSubject($id: String, $name: String, $programId: Int, $day: Int, $startTime: String, $minAge: Float, $maxAge: Float, $teacher: String, $comment: String, $isFull: Boolean, $online: Boolean) {
    updateSubject(id: $id, name: $name, programId: $programId, day: $day, startTime: $startTime, minAge: $minAge, maxAge: $maxAge, teacher: $teacher, comment: $comment, isFull: $isFull, online: $online)
  }
`
export const DELETE_SUBJECT = gql`
  mutation DeleteSubject($id: ID!) {
    deleteSubject(id: $id)
  }
`
