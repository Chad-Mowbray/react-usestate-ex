import { Component, useState, useEffect } from "react";


const DisplayRandomNumber = () => {


  const [num, setNum] = useState(0)

  useEffect( () => {
    
    const myIntervalPositive = setInterval( async () => {
      const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=6000&col=1&base=10&format=plain&rnd=new")
      const responseBody = await response.json()
      console.log(responseBody)
      setNum(responseBody)
      
    }, 2000)

    return () => {
      console.log("cleanup...")
      clearInterval(myIntervalPositive)
    }

  }, [] )


  return (
    <div>
      <h3>Random number goes here: {num}</h3>
    </div>
  )
}


// class DisplayRandomNumber extends Component {

//   state = {
//     num: 0
//   }

  
  // getRandomNumber = () => {
    // this.myIntervalPositive = setInterval( () => {
    //   this.setState({num: Math.floor(Math.random() * 1000)})
    //   console.log(this.state.num)
    // }, 2000)
  // }

//   getRandomNeg = () => {
//     this.myIntervalNegative = setInterval( () => {
//       this.setState({num: Math.floor(Math.random() * -1000)})
//       console.log(this.state.num)
//     }, 1000)
//   }

//   componentDidMount = () => {
//     this.getRandomNumber()
//     this.getRandomNeg()
//   }

//   componentWillUnmount = () => {
//     console.log("component is about to unmount")
//     clearInterval(this.myIntervalPositive)
//     clearInterval(this.myIntervalNegative)
//   }

//   render() {
    // return (
    //   <div>
    //     <h3>Random number goes here:</h3>
    //     <p>{this.props.something}</p>
    //   </div>

    // )
//   }
// }

export default DisplayRandomNumber