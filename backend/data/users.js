import bcrypt from 'bcryptjs'

const users = [
   {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bycrpt.hashSync('123456', 10),
      isAdmin: true,
   },
   {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      password: bycrpt.hashSync('123456', 10),
   },
   {
      name: 'Kelly Lancer',
      email: 'kellylancer@example.com',
      password: bycrpt.hashSync('123456', 10),
   },
]

export default users
