interface MyUser {
  name: string;
  email: string;
}

interface MyAdmin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: MyUser | MyAdmin): boolean {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}
