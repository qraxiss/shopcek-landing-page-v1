import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'



export function Logo(){
    return <div className="logo">
        <img className='icon' src={icon}/>
        <img className='text' src={text}/>
    </div>
}