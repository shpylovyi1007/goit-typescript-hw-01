export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}


// Замініть наступний код на версію за допомогою Record
type User = Record<UserRole, string>;

const RoleDescription: User = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
