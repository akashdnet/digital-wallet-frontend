import TableComponent from "./TableComponent";



export type TUpdateProfile = "none" | "update" | "pass"


export default function AgentManagementPage() {

  return (
    <section className="space-y-8 max-w-6xl mx-auto md:p-6 p-3">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
        Agent Management 
      </h1>




    
          <TableComponent/>
      
      
    </section>
  );
}
