
import { useState } from "react"
//propriedades
function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [user,setUser]=useState({});

  function handleUser(e){
     e.preventDefault();
      setUser({
        nome:nome,
        idade:idade,
        email:email
      })
      setEmail("")
      setNome("")
      setIdade("")
  }
  return (
    <div>
      <form  onSubmit={handleUser}>

        <label>Nome</label> <br />
        <input placeholder="Informe seu nome"
          value={nome}
          onChange={(event) => { setNome(event.target.value) }}>
        </input><br />

        <label>Email</label><br />
        <input placeholder="Informe seu email"
          value={email}
          onChange={(event) => { setEmail(event.target.value) }}>
        </input><br />

        <label>Idade</label><br />
        <input placeholder="Informe sua idade"
          value={idade}
          onChange={(event) => { setIdade(event.target.value) }}>
        </input><br />

        <button type="submit">Registar</button>

      </form>
      <br /><br />
      <div>
        <span>Nome :{user.nome}   </span><br />
        <span>Email : {user.email}</span><br />
        <span>Idade : {user.idade}</span><br />
      </div>
    </div>
  );
}

export default App;
