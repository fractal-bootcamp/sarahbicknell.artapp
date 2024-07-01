import { SignIn, SignUp } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div> 
        <h1>Login or Sign Up</h1>
      </div>
      <div className='flex'>
        <div>
          <SignIn forceRedirectUrl="/api/sign-up-callback" />
        </div>
        <div>
          <SignUp forceRedirectUrl="/api/sign-up-callback" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;