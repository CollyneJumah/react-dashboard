import { CareHistoryData } from '../../../Data/careHistory'
import './carehistory.css'

const CareHistory = () =>{
    return (
        <div className="care-historys">
            {
                CareHistoryData.map( (careHistory,id) =>{
                    return (
                        <div className='care-history' key={id}>
                            <img src={careHistory.image} alt="" />
                            <div className="noti">
                                <div style={{marginBottom:"0.5rem"}}>
                                    <span>{careHistory.name}</span>
                                    <span>{careHistory.year}</span>
                                </div>
                            </div>
                            <div>
                               
                                <span>{careHistory.time}</span>

                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default CareHistory