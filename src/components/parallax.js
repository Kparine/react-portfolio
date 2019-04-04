import React from 'react'
import { Parallax } from "react-parallax"

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export default class NavParallax extends React.Component {
  render() {
    return (
      <div>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
          </div>
        </Parallax>
      </div>
    )
  }
}