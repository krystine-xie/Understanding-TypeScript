// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Krystine',
//     age: 28,
//     hobbies: ['Tennis', 'Running'],
//     role: [2, 'Software Developer']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Krystine',
    age: 28,
    hobbies: ['Tennis', 'Running'],
    role: Role.ADMIN
};



// person.role.push('admin'); // push works for tuples for some reason
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favouriteActivities: any[]; 
favouriteActivities = ['Sports', 23];

console.log(person);
console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}