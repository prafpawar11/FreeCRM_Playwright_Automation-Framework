import {fa, faker} from '@faker-js/faker';

export class FakerUtils
{

    static generateFirstName()
    {
        return faker.person.firstName();
    }

    static generateLastName()
    {
        return faker.person.lastName();
    }

    static generateCity()
    {
        return faker.location.city();
    }

    static generateState()
    {
        return faker.location.state();
    }

    static generateCountry()
    {
        return faker.location.country();
    }

    static generateCountryCode()
    {
        return faker.location.countryCode();
    }

    static generateEmail()
    {
        return faker.internet.email();
    }

    static generateUsername()
    {
        return faker.internet.username();
    }

    static generatePassword()
    {
        return faker.internet.password();
    }

    static generateAccountNumber()
    {
        return faker.finance.accountNumber();
    }

    static generateCreditCardNumber()
    {
        return faker.finance.creditCardNumber();
    }

    static generateIntNumber()
    {
        return faker.number.int();
    }

    static generateTenDigitNumber()
    {
        return faker.number.int({min : 1000000000, max: 9999999999});
    }

    static geneateDecimalNumber()
    {
        return faker.number.float({min : 10, max : 1000});
    }

    

}