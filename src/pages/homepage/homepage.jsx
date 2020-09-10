import React from "react"

import "./homepage.scss"
import TextBlock from "../../components/text-block/text-block"

const HomePage = () => {
  return (
    <>
      <TextBlock title="The Russian Learning Center RADUGA" image="/assets/russisch-web.jpg">
        <p>Welcome to our Learning Center ​ The Learning Center Raduga is a diverse after-school program for preschool and K-12 students, age 3 to 16. Our center was established in 2009. We offer the following educational and developing tracks:</p>
      </TextBlock>
      <TextBlock title="The Russian Learning Center RADUGA" image="/assets/russisch-web.jpg">
        <p>We offer private, semi-private and small-group lessons (typically, 4-7 students). We focus on individual approach and communication, so each and every student is given personal attention.</p>
      </TextBlock>
      <TextBlock title="The Russian Learning Center RADUGA" image="/assets/russisch-web.jpg">
        <p>We have a dedicated team of professionals who love to work with children and know how to engage the kids and make the lessons interesting.</p>
      </TextBlock>

      <TextBlock title="The Russian Learning Center RADUGA" image="/assets/russisch-web.jpg">
        <p>The Center is conveniently located in a quiet plaza in San Ramon in proximity to the cities of Pleasanton, Dublin and Danville. The Center has an easy access from I-680 highway and ample parking space.</p>
      </TextBlock>

      {/* <h1>The Russian Learning CENTER RADUGA</h1>
      <ul>
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
      </ul> */}
    </>
  )
}

export default HomePage
