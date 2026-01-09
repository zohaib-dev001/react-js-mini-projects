
import { Bookmark } from 'lucide-react'
const Card = (props) => {


    return (
        <div className="card">
            <div className="top">
                <div className='image'>

                    <img src={props.logo} alt="logo" />
                </div>
                <button>save <Bookmark size={16} /></button>
            </div>
            <div className="center">
                <div>
                    <h3>{props.company}<span>{props.posted}</span></h3>
                    <h2>{props.post}</h2>
                </div>
                <div className='tag'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>{props.pay} </h4>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>

            </div>
        </div>
    )
}

export default Card