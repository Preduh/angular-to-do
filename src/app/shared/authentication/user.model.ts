export interface UserInterface {
  email: string
  bio: null
  image: string
  token: string
  username: string
}

export interface UserLoginRequestInterface {
  user: {
    email: string
    password: string
  }
}

export interface UserRegisterRequestInterface {
  user: {
    username: string
    email: string
    password: string
  }
}

export interface UserResponseInterface {
  user: UserInterface
}
