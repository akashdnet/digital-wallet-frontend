
import { FormComponent as LoginFormComponent } from "./LoginFormComponent";




export default function LoginPage() {


  return (
    <section className="space-y-8 max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3 text-center">
        Welcome Back
      </h1>

      <h2 className="text-lg tracking-wider text-center text-gray-500">Login with your credentials</h2>



<LoginFormComponent/>





      
    </section>
  );
}
