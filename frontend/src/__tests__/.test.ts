import  { sum } from "../index";
// import type * as testFunctions from "../index";
// import jest from "jest"
// const {sum} = jest.requireActual<typeof testFunctions>("../index.ts")
import { describe, expect, it, test } from "@jest/globals";

const successCases = [
    {
        id: 0,
        input: { a: 1, b: 1 },
        output: 2
    },
    {
        id: 1,
        input: { a: 5, b: 8 },
        output: 13
    },
    {
        id: 2,
        input: { a: 6, b: 3 },
        output: 9
    },
    {
        id: 3,
        input: { a: 8, b: 22 },
        output: 30
    },
    {
        id: 4,
        input: { a: 11, b: 14 },
        output: 25
    },
]
describe("test sum", () => {
    it.each(successCases)("success case $id", ({input,output }) => {
        const { a, b } = input
        expect(sum(a,b)).toBe(output)
})
});

// import { describe, expect, it, test } from "@jest/globals";
// import { result } from "../index";

// describe("test string", () => {
//     it("должен вернуть звездочки", () => {
//         const value = "ghj"
//         const expectValue = "***"
//         expect(result(value)).toBe(expectValue)
//     });
//     it("должен вернуть не строка", () => {
//         const value = 456
//         const expectValue = "not string"
//         expect(result(value)).toBe(expectValue)
//     });
// });