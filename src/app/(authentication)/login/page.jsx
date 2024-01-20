import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/action";
import "./login.css"
const LoginPage = () => {

  return (
    <div className="loginpage">
      <div className="loginpage-wrapper">

        <form action={handleGithubLogin}>
        <button className="github">Login with github</button>
       </form>
       <LoginForm/>
      </div>
    </div>
  );
}

export default LoginPage