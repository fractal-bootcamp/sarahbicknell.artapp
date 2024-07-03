import { SignIn } from '@clerk/nextjs';
import { SignUp } from '@clerk/nextjs';

const LoginPage = () => (
  <div>
    <div>
        <h1>Login</h1>
        <SignIn />
    </div>
        <div>
        <h1>Sign Up</h1>
        <SignUp />
    </div>
  </div>
);

export default LoginPage;
