import React from 'react'
import Section1 from './components/section1'

const users = [
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
    paragraph: "Prime customers, that have access to bank credit and are satisfied with the current product",
    button: "Satisfied",
    color: "gray"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTaKNWNtqm2aDAGH0bXE9wwCyxTMo7F2dZccEM6HPvbg&s",
    paragraph: "Prime customers that have access to bank credit and are not satisfied with the current service",
    button: "Underserved",
    color: "royalblue"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkgnKM8-Q0068PEsBz7mChohGxMvk_r_GHw&s",
    paragraph: "Customers from non-prime and sub-prime segments with no access to bank credit",
    button: "Underbanked",
    color: "lightseagreen"
  }
]

const App = () => {
  return (
    <div>
      <Section1 data={users} />
    </div>

  )
}

export default App