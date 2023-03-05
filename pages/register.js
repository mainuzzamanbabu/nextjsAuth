import React, { useReducer, useState } from 'react';
import Layout from '../layouts/Layout'
import { useRouter } from "next/router";
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const submit = async (e) => {
        e.preventDefault();
        // const final = name + email + password
        // console.log(final)
        await fetch('http://localhost:8000/api/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        await router.push('/login')
    }
    return (

        <Layout>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <div className="form-floating">
                    <input className="form-control" placeholder="name" required
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Enter Your Name</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" placeholder="name@example.com" required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </Layout>
    )
}

export default Register;