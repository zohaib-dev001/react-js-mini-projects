import Card from './components/card'
import Microsoft from "./assets/Microsoft-logo.webp";
import Google from "./assets/google-logo.webp";
import Meta from "./assets/meta-color.svg";
import Intel from "./assets/intel-logo.svg";
import Tesla from "./assets/Tesla-logo.svg";
import Apple from "./assets/apple-logo.png";
import Amazon from "./assets/amazon-logo.png";
import Oracle from "./assets/oracle-logo.svg";
import Samsung from "./assets/samsung-logo.svg";
import Ibm from "./assets/IBM_logo.svg";
const jobs = [
  {
    brandLogo: Microsoft,
    companyName: "Microsoft",
    jobPosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Google,
    companyName: "Google",
    jobPosted: "10 weeks ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Apple,
    companyName: "Apple",
    jobPosted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Meta,
    companyName: "Meta",
    jobPosted: "1 week ago",
    post: "React Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Ibm,
    companyName: "IBM",
    jobPosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Intel,
    companyName: "Intel",
    jobPosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Amazon,
    companyName: "Amazon",
    jobPosted: "4 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Tesla,
    companyName: "Tesla",
    jobPosted: "8 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Oracle,
    companyName: "Oracle",
    jobPosted: "2 weeks ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Punjab, Pakistan"
  },
  {
    brandLogo: Samsung,
    companyName: "Samsung",
    jobPosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Punjab, Pakistan"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {jobs.map((elem, index) => {
        return <Card key={index}
          company={elem.companyName}
          pay={elem.pay}
          posted={elem.jobPosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          logo={elem.brandLogo}
          location={elem.location}
        />

      })}

    </div>
  )
}

export default App