import './trial.styles.scss';

import {ReactComponent as Pack} from '../assets/pack.svg'
import {ReactComponent as Fly} from '../assets/fly.svg'
import {ReactComponent as Live} from '../assets/live.svg'


const Trial = () => {
    return(
        <div className='TrialContainer'>
            <div className='TrialPas'>
                <Pack className='Logo'/>
                <h2>Pack</h2>
            </div>
            <h2 className='Arrow'>&gt;</h2>
            <div className='TrialPas'>
                <Fly className='Logo'/>
                <h2>Fly</h2>
            </div>
            <h2 className='Arrow'>&gt;</h2>
            <div className='TrialPas'>
                <Live className='Logo'/>
                <h2>Live</h2>
            </div>
            <h2 className='Arrow'>&gt;</h2>
            <div className='Enjoy'>
                <h1>ENJOY</h1>
                <h3>A NEW WORLD!</h3>
            </div>
        </div>
    )
}

export default Trial;