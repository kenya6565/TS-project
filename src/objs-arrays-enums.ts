// const person: {
//     name: string,
//     age: number,
//     hobbies: string,
//     role: [number, string]
// } = {
//     name: 'yota',
//     age: 36,
//     hobbies: ['sports', 'cooking']
//     role: [2, "author"]
// }

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'yota',
  age: 36,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN
};

// let favoriteActivities: string[];
// favoriteActivities = ['sports', 'basketball']

// for (const hobby of person.hobbies) {
//     console.log(hobby)
// }
