import { SignIn, SignUp, useUser, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SignInPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <SignIn
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/dashboard"
    />
  </div>
);

export const SignUpPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <SignUp
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
      afterSignUpUrl="/post-signup"
    />
  </div>
);

export const PostSignUpModal = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [newsletter, setNewsletter] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async () => {
    if (!termsAccepted) {
      alert('You must accept the terms and conditions.');
      return;
    }
    if (user) {
      await user.update({
        unsafeMetadata: { newsletterSubscribed: newsletter },
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome to GenDoc!</h2>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="mr-2"
          />
          Subscribe to newsletter
        </label>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mr-2"
          />
          I accept the <a href="/terms" className="text-blue-500">Terms & Conditions</a>
        </label>
        <div className="flex justify-end">
          <button
            onClick={() => signOut(() => navigate('/sign-in'))}
            className="mr-4 px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};