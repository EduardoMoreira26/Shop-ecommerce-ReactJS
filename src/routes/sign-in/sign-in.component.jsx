import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;