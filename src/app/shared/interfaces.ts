export interface Auth {
  id: 4;
  token: string;
}

export interface User {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
}
