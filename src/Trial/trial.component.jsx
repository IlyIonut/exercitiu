import './trial.styles.scss';

import {ReactComponent as Pack} from '../assets/pack.svg'
import {ReactComponent as Fly} from '../assets/fly.svg'
import {ReactComponent as Live} from '../assets/live.svg'


const Trial = () => {
    return(
        <div className='TrialContainer'>
            <div className='TrialPasContainer'>
                <div className='TrialPas'>
                    <Pack className='Logo'/>
                    <div className='Text'>p<p>ack</p></div>
                    
                </div>
                <h2 className='Arrow'>&gt;</h2>
                <div className='TrialPas'>
                    <Fly className='Logo'/>
                    <div className='Text' >f<p>ly</p></div>
                </div>
                <h2 className='Arrow'>&gt;</h2>
                <div className='TrialPas'>
                    <Live className='Logo'/>
                    <div className='Text'>l<p>ive</p></div>
                </div>
            </div>
                <div className='EnjoyContainer'>
                    <h2 className='EnjoyArrow'>&gt;</h2>
                    <div className='Enjoy'>
                        <h1>ENJOY</h1>
                        <h3>A NEW WORLD!</h3>
                    </div>
                </div>  
        </div>
    )
}

export default Trial;