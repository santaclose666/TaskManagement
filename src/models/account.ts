export class Account {
  id: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  avt: string;

  constructor(
    id: string,
    email: string,
    password: string,
    role: 'user' | 'admin',
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
    this.avt = role === 'admin' ? 'person-done-outline' : 'person-outline';
  }
}

export const accounts: Account[] = [
  new Account('1', 'nguyena@vn.com', 'password123', 'user'),
  new Account('2', 'tranb@vn.com', 'password456', 'admin'),
  new Account('3', 'leec@vn.com', 'password789', 'admin'),
  new Account('4', 'trinhd@vn.com', 'password101', 'user'),
  new Account('5', 'phame@vn.com', 'password202', 'admin'),
  new Account('6', 'haf@vn.com', 'password303', 'user'),
];
