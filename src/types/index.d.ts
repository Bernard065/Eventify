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
