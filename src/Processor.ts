import {User} from "./User";

export class Processor {

    static giveConsent (user: User): void {
        user.consentGiven = true;
    }
    static verifyConsent (user: User): boolean {
        return user.consentGiven === true;
    }
    // Новый метод для проверки, может ли пользователь дать согласие
    static checkConsentEligibility(user: User): boolean {
        return user.age >= 18;
    }
    // Новый метод, отменяющий ранее предоставленное согласие
    static revokeConsent(user: User): void {
        user.consentGiven = false;
    }
}