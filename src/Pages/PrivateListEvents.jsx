import {useNavigate} from 'react-router-dom';
const PrivateListEvents = () => {
    const navigate = useNavigate();



const handleHome = ()=>{
    navigate('/')
}
    
    return(
        <div>    

        <button onClick={handleHome}>home</button>
                     <p> esto es listas privadas</p>
        
            </div>
    )
   
}

export default PrivateListEvents;