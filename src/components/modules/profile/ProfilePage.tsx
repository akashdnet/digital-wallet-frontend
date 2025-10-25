import { useState } from "react";
import InfoComponent from "./InfoComponent";
import TableComponent from "./TableComponent";
import { FormComponent as ProfileFormComponent } from "./ProfileFormComponent";
import { FormComponent as PasswordFormComponent } from "./PasswordFormComponent";
import { useUserInfoQuery } from "@/redux/features/profile/profile.api";


export type TFromClose = "none" | "update" | "pass"


export default function ProfilePage() {
  const [formClose, setFormClose] = useState("none");

  
    const { data } = useUserInfoQuery(undefined)
    const userInfo = data?.data?.userInfo
    const transactions = data?.data?.transactions


  const handleFormClose = (value:TFromClose) => {
    setFormClose(value);
  };

  return (
    <section className=" max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
        {formClose == "none" ? "Profile Manager": formClose == "update" ? "Update your profile information" : "Change your password"}
      </h1>




      {formClose == "update" && <ProfileFormComponent data={userInfo} onFormClose={handleFormClose} />}
      {formClose == "pass" && <PasswordFormComponent onFormClose={handleFormClose}  />}




      { formClose == "none" && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="lg:col-span-1">
          <InfoComponent onFormClose={handleFormClose} data={userInfo}/>
        </div>


        <div className="lg:col-span-1">
          <TableComponent transactions={transactions} role={userInfo?.role} />
        </div>
      </div>}
    </section>
  );
}
