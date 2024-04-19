import React from "react";
import ProfilePicture from "./_components/profile-picture";
import ProfileForm from "@/components/forms/profile-form";

type Props = {};

const Settings = async (props: Props) => {
  const removeProfileImage = async () => {
    "use server";
    return <div>Remove</div>;
  };

  const uploadProfileImage = async (image: string) => {
    "use server";
    return <div>Upload</div>;
  };

  const updateUserInfo = async (name: string) => {
    "use server";
    return <div>Update</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={""}
          onUpload={uploadProfileImage}
        />
         <ProfileForm
          user={""} //TODO: add user info from db
          onUpdate={updateUserInfo} //TODO: add logic updateUserInfo method
        />
      </div>
    </div>
  );
};

export default Settings;
