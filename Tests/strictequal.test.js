let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let strictEquals = require('../strictequal.js')

describe('equality',() => {
    describe('strictEqualsTest',() => {
        it('numbers are strictly equal', () => {
            let strictEqualsResult = strictEquals(1,1)
            expect(strictEqualsResult).to.equal(true)
        })
        it('strings are strictly equal', () => {
            let strictEqualsResult = strictEquals('one','one')
            expect(strictEqualsResult).to.equal(true)
        })
        it('one string and one number are not stricly equal', () => {
            let strictEqualsResult = strictEquals('one',1)
            expect(strictEqualsResult).to.equal(false)
        })
        it('strings are not equal', () => {
            let strictEqualsResult = strictEquals('one','two')
            expect(strictEqualsResult).to.equal(false)
            })
        it('numbers are not equal', () => {
            let strictEqualsResult = strictEquals(1,2)
            expect(strictEqualsResult).to.equal(false)
            })
    })
})
