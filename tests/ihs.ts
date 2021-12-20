import {browser} from "protractor";
import {async} from "q";


describe('First describe', () => {
    it('First It', async () => {
        await expect('2').toEqual('2');
    });

    it('Second It', async () => {
        await expect('3').toEqual('3');
    })
})

