import { Dispatch, SetStateAction } from "react";

declare interface CreateUserParams {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

declare interface UpdateUserParams {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
}

declare interface EventFormProps {
  userId: string;
  type: "Create" | "Update";
}

declare type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

declare interface FileUploaderProps {
  imageUrl: string
  onFieldChange: (value: string) => void
  setFiles: Dispatch<SetStateAction<File[]>>
}
