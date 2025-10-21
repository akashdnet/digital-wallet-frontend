
import { FormComponent as CashoutFormComponent } from "./CashoutFormComponent";


export type TUpdateProfile = "none" | "update" | "pass"


export default function CashoutPage() {


  return (
    <section className="space-y-8 max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
        Cash Out
      </h1>



<CashoutFormComponent/>





      
    </section>
  );
}
