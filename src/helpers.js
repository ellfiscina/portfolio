const skills = [
    {value: 80, label: "Frontend Developer"},
    {value: 70, label: "Backend Developer"},
    {value: 60, label: "Database"}
];

function getAge(birthdate) { 
    var diff = Date.now() - birthdate.getTime();
    var age = new Date(diff); 
  
    return Math.abs(age.getUTCFullYear() - 1970);
}

const about = [
    {label: 'Name', value: 'Ellen Fiscina'},
    {label: 'Age', value: `${getAge(new Date(1993, 3, 20))} years old`},
    {label: 'Phone', value: '+46 76-011-0358'},
    {label: 'Email', value: 'ellfiscina@gmail.com'}
];

const icons = [
    'python',
    'react',
    'django',
    'javascript',
    'typescript',
    'html-5',
    'css',
    'ruby',
    'swift',
    'c',
    'cplus',
    'c-sharp',
    'github',
    'postgresql',
    'gnu-bash'
];

const hobbies = [
    'reading',
    'gaming',
    'baking',
    'knitting'
];

export {skills, about, icons, hobbies};