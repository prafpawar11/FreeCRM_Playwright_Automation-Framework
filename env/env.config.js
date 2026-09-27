import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';

console.log(`Executing Code in ${envName.toUpperCase()} Environment`);
console.log(`Executing Code in ${envName.toUpperCase()} Environment`);
console.log(`Executing Code in ${envName.toUpperCase()} Environment`);
console.log(`Executing Code in ${envName.toUpperCase()} Environment`);
console.log(`Executing Code in ${envName.toUpperCase()} Environment`);


dotenv.config({path : `./env/${envName}.env`, override : true});

export const env = 
{
    BASE_URL : process.env.BASE_URL,
    USERNAME : process.env.USERNAME,
    PASSWORD : process.env.PASSWORD
}