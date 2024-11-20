import { useNavigate } from "react-router-dom";

const UserProfile = ()=>{

    const navigate = useNavigate();

    const handlePerfil = ()=>{
        navigate('/')
    }
    return(
        <>
            <div>
                <button onClick={handlePerfil}>Home</button>


                <p> esto es perfil</p>
            </div>
        
        </>
    )
}

export default UserProfile;