// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Krystine',
    age: 28,
    hobbies: ['Tennis', 'Running'],
    role: [2, 'Software Developer']
};
person.role.push('admin');
person.role[1] = 10;
var favouriteActivities;
favouriteActivities = ['Sports', 23];
console.log(person);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
