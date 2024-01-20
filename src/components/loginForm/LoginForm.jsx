
"use client"
import "./loginform.css"
import {useFormState} from "react-dom"
import { login } from "@/lib/action";
import Link from "next/link";

const LoginForm = () => {
    const [state ,formAction]=useFormState(login,undefined)
  return (
    <form className="form" action={formAction}>

            <input type="email" placeholder="email" name="email"/>
            <input type="password" placeholder="password" name="password"/>
            <button>Login</button>
            {state?.error}
            <Link href="/register">
              {"Do not have an account"} <b>Register</b>
            </Link>

        </form>
  )
}

export default LoginForm