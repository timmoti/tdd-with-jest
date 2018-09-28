const account = require("../src/account");



describe('account balance of 500', () => {
    beforeEach(() => {
        account.balance = 500;
    });

    test('getBalance should return 500 ', () => {
        expect(account.getBalance()).toEqual(500);    
    });

    test('deposit 500 should return 1000 ', () => {
        expect(account.deposit(500)).toEqual(1000);
    });

    test('withdraw 50 should return 450 ', () => {
        expect(account.withdraw(50)).toEqual(450);
    });
});

describe('account balance of 5000', () => {
    beforeEach(() => {
        account.balance = 5000;
    });

    test('getBalance should return 5000 ', () => {
        expect(account.getBalance()).toEqual(5000);    
    });

    test('deposit 500 should return 5000 ', () => {
        expect(account.deposit(500)).toEqual(5000);
    });

    test('withdraw 50 should return 4950 ', () => {
        expect(account.withdraw(50)).toEqual(4950);
    });
});

describe('account balance of 0', () => {
    beforeEach(() => {
        account.balance = 0;
    });

    test('getBalance should return 0 ', () => {
        expect(account.getBalance()).toEqual(0);    
    });

    test('deposit 500 should return 500 ', () => {
        expect(account.deposit(500)).toEqual(500);
    });

    test('withdraw 50 should return 0 ', () => {
        expect(account.withdraw(50)).toEqual(0);
    });
});