declare global {
  namespace Express {
    interface Request {
      token: string,
      username: string
    }
  }
}

export {}