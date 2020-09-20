import React from "react"
import Layout from "../../components/layout/layout"
import { SmallTextBlock } from "../../components/text-block/text-block"

import "./programs.scss"

const Programs = props => {
  return (
    <Layout title="Programs">
      <h2>We offer the following educational and developing tracks:</h2>
      <ul className="p">
        <li>Russian Language and Reading Comprehension</li>
        <li>Communication in Russian, a Language Practice Class</li>
        <li>Math at various levels:</li>- Elementary School Program - Middle/High School Program - SAT/ACT Prep School - Kangaroo Math Olympiad
        <li>Science (includes Lab)</li>
        <li>Chess</li>
        <li>Art and Drawing</li>
        <li>Drama Class</li>
        <li>Music and Speech Classes for Children Age 3+</li>
        <li>Russian Speech Therapist is available</li>
        <li>Yoga for Kids</li>
      </ul>

      <div className="small-text-blocks">
        <SmallTextBlock img="https://image.shutterstock.com/image-vector/two-students-sitting-on-numbers-260nw-318739478.jpg" title="Elementary School Program" />
        <SmallTextBlock img="https://image.freepik.com/free-vector/kids-online-lessons-concept_23-2148520727.jpg" title="Middle/High School Program" />
        <SmallTextBlock img="https://image.shutterstock.com/image-vector/graduation-cap-on-books-stacked-260nw-400389649.jpg" title="SAT/ACT Prep" />
        <SmallTextBlock img="http://www.mathkangaroo.us/mk/images/20-years_logo.png" title="Kangaroo Math Olympiad" />
      </div>
    </Layout>
  )
}

export default Programs
