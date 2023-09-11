import './week.css'
import clear from '../image/clear.svg'
import clouds from '../image/clouds.gif'
import cloudy from '../image/cloudy.svg'
import rain from '../image/rain.svg'
const Week = () => {
    return ( 
        <div className="week flex text-center justify-center">
            <h2 className='upcoming'> Upcoming</h2>
            <div className='day'>
                <div className='monday'> 
                <p> Tuesday</p>
                <div className='Icon'>
                    <img src={clouds} alt="clear" />
                </div>
                <p>28°C</p>
                </div>
                <div className='monday'>
                <p> wednesday</p> 
                <div className='Icon'>
                     <img src={cloudy} alt="clear" />
                </div>
                <p>29°C</p>
                </div>
                <div className='monday'> 
                <p> Thursday</p>
                <div className='Icon'>
                     <img src={clear} alt="clear" />
                </div>
                <p>26°C</p>
                </div>
                <div className='monday'> 
                <p> Friday</p>
                <div className='Icon'>
                     <img src={rain} alt="clear" />
                </div>
                <p>19°C</p>
                </div>
             </div>
        </div>
     );
}
 
export default Week;