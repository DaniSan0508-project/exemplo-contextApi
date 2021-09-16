import { useContext } from "react";
import { UserContext } from "../../context/user"

export default function Nomes(){
   const {alunos} = useContext(UserContext)
    return(
        <strong>Bem vindo {alunos}</strong>
    )
}