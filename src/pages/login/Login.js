

export const Login = () => (
    <main>
        <h1>Login</h1>
        <form method="POST" action="backen/v1/login" >
            <input type="text" name="mail" ></input>
            <input type="password" name="password" ></input>
        </form>
    </main>
);