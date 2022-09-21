// toBe
// toBeNaN

describe("Test #1", () => {
  it("Check Age", () => {
    expect(ageClassification(-1)).toBe(null)
    expect(ageClassification(1)).toBe("детский возраст")
    expect(ageClassification(24)).toBe("детский возраст")
    expect(ageClassification(24.01)).toBe("молодой возраст")
    expect(ageClassification(44)).toBe("молодой возраст")
    expect(ageClassification(44.01)).toBe("средний возраст")
    expect(ageClassification(65)).toBe("средний возраст")
    expect(ageClassification(65.1)).toBe("пожилой возраст")
    expect(ageClassification(75)).toBe("пожилой возраст")
    expect(ageClassification(75.01)).toBe("старческий возраст")
    expect(ageClassification(90)).toBe("старческий возраст")
    expect(ageClassification(90.01)).toBe("долгожители")
    expect(ageClassification(122.01)).toBe(null)
    expect(ageClassification(150)).toBe(null)
  })
})

describe("Test #2", () => {
  it("Check Array", () => {
    const arr1 = [...evenFn(10)]
    const arr2 = [...evenFn(15)]
    const arr3 = [...evenFn(20)]
    expect(evenFn(10)).toEqual(arr1)
    expect(evenFn(15)).toEqual(arr2)
    expect(evenFn(20)).toEqual(arr3)
  })
})

// describe("Test #1", () => {
//   it("check our class sum()", () => {
//     expect(new Mat(100, "s").sum()).toBeNaN()
//   })
// })

// describe("Test #2", function () {
//   var a

//   it("and so is a spec", function () {
//     a = true

//     expect(a).toBe(true)
//   })
// })

// describe("Test #3", function () {
//   it("and has a positive case", function () {
//     expect(true).toBe(true)
//   })

//   it("and can have a negative case", function () {
//     expect(false).not.toBe(true)
//   })
// })

// describe("Test #4", function () {
//   var foo = 0
//   beforeEach(function () {
//     foo += 1
//   })
//   afterEach(function () {
//     foo = 0
//   })
//   beforeAll(function () {
//     foo = 1
//   })
//   afterAll(function () {
//     foo = 0
//   })
//   it("beforeEach afterEach beforeAll afterAll", function () {
//     expect(2).toEqual(2)
//     expect(foo).toBe(2)
//   })
// })

// describe("Test #5", function () {
//   beforeEach(function () {
//     this.foo = 0
//   })

//   beforeEach(function () {
//     this.bar = "test pollution?"
//   })

//   it("can use the `this` to share state", function () {
//     expect(this.foo).toEqual(0)
//     this.bar = "test pollution?"
//   })

//   it("prevents test pollution by having an empty `this` created for the next spec", function () {
//     expect(this.foo).toEqual(0)
//     expect(this.bar).toBe("test pollution?")
//   })
// })
