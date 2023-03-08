import "./register.scss";

const Register = () => {
  
// create hide password function somewhere!

  return <div>
    <form className="form">
      <input name='username' type='username' placeholder="username" />
      <input name='email' type='email' placeholder="email" />
      <input name='password' type='text' placeholder="password" />
      <button>REGISTER</button>
    </form>
  </div>;
};
export default Register;
