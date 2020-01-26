export class Page {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export class singleUser {
  data: User;
}

export class User {
  constructor(email, firstName, lastName, avatar) {
    this.email = email;
    this.first_name = firstName;
    this.last_name = lastName;
    this.avatar = avatar;
  }

  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

