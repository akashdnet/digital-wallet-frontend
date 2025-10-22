
import { FormComponent as SignupFormComponent } from "./SignupFormComponent";




export default function SignupPage() {


  return (
    <section className=" max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3 text-center">
        Sign Up
      </h1>

      <h2 className="text-lg tracking-wider text-center text-gray-500"> Fill up the form to signup</h2>



<SignupFormComponent/>





      
    </section>
  );
}
