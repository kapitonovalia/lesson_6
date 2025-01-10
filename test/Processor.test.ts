import {User} from "../src/User";
import {Processor} from "../src/Processor";

describe ("Processor test", () => {
    let user1: User;
    let user2: User;
    beforeEach(()=> {
        user1 = new User("John", "Smith", "12346", "Saint street", 17);
        user2 = new User("Aliia", "Kapitonova", "12347", "This street", 19);
    }
    )
    test("Default state undefined", () => {
        expect(user1.consentGiven).toBeUndefined();
    })
    test ("State is true", () => {
        Processor.giveConsent(user1);
        expect(user1.consentGiven).toBe(true);
    })
    test ("Processor verify consent test", () => {
        Processor.giveConsent(user1);
        expect(Processor.verifyConsent(user1)).toBeTruthy();
    })
    test ("Verify consent is false", () => {
        expect(Processor.verifyConsent(user1)).toBeFalsy();
    })
    //Пользователь младше 18 лет не может дать согласие
    test ("Return false for users under 18 y o", () => {
        Processor.checkConsentEligibility(user1);
         expect(Processor.checkConsentEligibility(user1)).toBe(false);
        })
    //Пользователь старше 18 лет может успешно дать согласие
    test("Return true for users over 18 y o", ()=> {
        Processor.checkConsentEligibility(user2);
        expect(Processor.checkConsentEligibility(user2)).toBeTruthy();
    })
    //Метод корректно отзывает согласие
    test ("Revoke consent test",() => {
        Processor.revokeConsent(user1);
        expect(Processor.revokeConsent(user1)).toBeFalsy();
    })
})