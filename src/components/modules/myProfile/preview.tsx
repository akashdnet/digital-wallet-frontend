import { Button } from "@/components/ui/button";
import { useMyProfileQuery } from "@/redux/features/user/user.api";
import { TUser } from "@/redux/features/user/user.type";
import InfoItem from "./InfoItem";
import TransactionList from "./TransactionList";

function Preview({ onEditMode }: { onEditMode: () => void }) {
  const { data, isLoading, error } = useMyProfileQuery(undefined);
  const user: TUser = data?.data.userInfo;


  // console.log(user)



  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    );
  }

  return (
    <div className="w-auto  grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* left */}
      <div className="max-w-md">
        <div className="bg-white shadow rounded-lg p-6 space-y-8">

      <div className="flex items-center gap-6">
        <img
          src={user?.avatar}
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
          <div>
            <span className="text-sm text-gray-500">Phone: </span>
            {user?.phone ? (
              <span className="font-medium">{user.phone}</span>
            ) : (
              <span className="text-sm text-gray-400">Not Available</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button onClick={onEditMode} className="w-full cursor-pointer">
          Update Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {user?.agentStatus !== "idk" && (
          <InfoItem label="Agent Status" value={user?.agentStatus} capitalize />
        )}
        <InfoItem label="Role" value={user?.role?.join(", ")} />
        <InfoItem label="Wallet Balance" value={`৳ ${user?.wallet?.balance}`} />
        <InfoItem
          label="Wallet Status"
          value={user?.wallet?.status}
          capitalize
        />
      </div>
    </div>
      </div>


        {/* right  */}
        <div className="max-w-md">
          <TransactionList/>
        </div>


    </div>
  );
}



export default Preview;
