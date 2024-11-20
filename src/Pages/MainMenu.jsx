import { useNavigate } from "react-router-dom";

const MainMenu = ()=>{

    const navigate = useNavigate();

    const handlePerfil = ()=>{
        navigate('/user-profile')
    }
    const handleMisEventos = ()=>{
        navigate ('/public-events')
    }
    return(
        <>
            <div>
                <button onClick={handlePerfil}>Profile</button>

                <button onClick={handleMisEventos}>Mis eventos</button>
            </div>


            <div>
            <p> esto es Home</p>

            </div>
        
        </>
    )
}

export default MainMenu;