import React from "react"

import "./homepage.scss"
import TextBlock, { SmallTextBlock } from "../../components/text-block/text-block"
import GoogleMap from "../../components/googleMap/googleMap"

export const HomePage = () => {
  return (
    <>
      <TextBlock title="Welcome to our Learning Center" image="/assets/pushkin.jpg">
        <div className="h1">Working today for a brighter, and better tomorrow</div>
      </TextBlock>
      <TextBlock backgroundColor="background-color-lightest">
        <h2>The Russian Learning Center RADUGA</h2>
        <div className="small-text-blocks">
          <SmallTextBlock title="All ages">
            Our Learning Center is a diverse after-school program for <strong className="color-special-light">preschool and K-12</strong> students, age 3 to 16.
          </SmallTextBlock>
          <SmallTextBlock title="Small groups">
            We offer private, semi-private and small-group lessons (typically, <strong className="color-special-light">4-7 students</strong>).
          </SmallTextBlock>
          <SmallTextBlock title="Personal attention">
            Center focus on <strong className="color-special-light">individual approach</strong> and communication, so each and every student is given personal attention.
          </SmallTextBlock>
          <SmallTextBlock title="Our Professionals">
            We have a dedicated team of professionals who love to work with children and know how to <strong className="color-special-light">engage the kids</strong> and make the lessons interesting.
          </SmallTextBlock>
        </div>
      </TextBlock>
      <img src="/assets/rus.jpg" className="wide-image" alt="promo" />
      <TextBlock backgroundColor="background-color-darkest">
        <div className="h2 color-special-light">Our Location</div>
        <p className="color-lightest">The Center is conveniently located in a quiet plaza in San Ramon in proximity to the cities of Pleasanton, Dublin and Danville. The Center has an easy access from I-680 highway and ample parking space.</p>
        <GoogleMap />
      </TextBlock>
    </>
  )
}

export default HomePage
