const Intern = require('../lib/Intern');

test('ObjIntern', () => {
    const intern = new Intern('carl', 1, 'email@gmail.com', 'email@gmail.com');
    expect(intern.school) .toEqual(expect.any(String));
});
test('ObjIntern', () => {
    const intern = new Intern('carl', 1, 'email@gmail.com', 'email@gmail.com');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('ObjIntern', () => {
    const intern = new Intern('carl', 1, 'email@gmail.com', 'email@gmail.com')
    expect(intern.getRole()).toEqual("Intern");
}); 