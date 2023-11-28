import { expect } from 'chai'
import {decrypt, encrypt} from "../../src/utils/crypt.js";

describe('crypt', () => {
    it('should encrypt/decrypt aes', async () => {
        const data = Uint8Array.from(Buffer.from('ocean'))
        const encryptedData = await encrypt(data, 'AES')
        const decryptedData = await decrypt(encryptedData, 'AES')
        expect(Uint8Array.from(decryptedData)).to.deep.equal(data)
    })
})