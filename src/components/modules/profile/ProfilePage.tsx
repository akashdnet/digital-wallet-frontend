import { useState } from "react";
import InfoComponent from "./InfoComponent";
import TableComponent from "./TableComponent";
import { FormComponent as ProfileFormComponent } from "./ProfileFormComponent";
import { FormComponent as PasswordFormComponent } from "./PasswordFormComponent";
import { useUserInfoQuery } from "@/redux/features/profile/profile.api";


export type TUpdateProfile = "none" | "update" | "pass"


export default function ProfilePage() {
  const [updateProfile, setUpdateProfile] = useState<TUpdateProfile>("none");

  
    const { data } = useUserInfoQuery(undefined)
    const userInfo = data?.data?.userInfo
    const transactions = data?.data?.transactions

  const handleUpdateProfile = (value:TUpdateProfile) => {
    setUpdateProfile(value);
  };

  return (
    <section className="space-y-8 max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
        Profile Manager
      </h1>




      {updateProfile == "update" && <ProfileFormComponent handleUpdateProfile={handleUpdateProfile} />}
      {updateProfile == "pass" && <PasswordFormComponent handleUpdateProfile={handleUpdateProfile} />}




      { updateProfile == "none" && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="lg:col-span-1">
          <InfoComponent handleUpdateProfile={handleUpdateProfile} data={userInfo}/>
        </div>


        <div className="lg:col-span-1">
          <TableComponent transactions={transactions} />
        </div>
      </div>}
    </section>
  );
}
