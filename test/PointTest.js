import { describe, it } from "mocha"
import { expect } from "chai"
import Point from "../src/main.js"

describe("Point", function () {
    let point = new Point(1, 2)
    it("should init", function () {
        expect(point).to.be.instanceOf(Point)
        expect(point.x).to.equal(1)
        expect(point.y).to.equal(2)
    })
    it("should init by with message", function () {
        let withPoint = Point.with(4, 7)
        expect(withPoint).to.be.instanceOf(Point)
        expect(withPoint.x).to.equal(4)
        expect(withPoint.y).to.equal(7)
    })
    it("should init with Array", function () {
        let pointFromArray = Point.fromArray([1, 2])
        expect(pointFromArray.x).to.equal(1)
        expect(pointFromArray.y).to.equal(2)
    })
    it("should be equal", function () {
        expect(point.isEqual(Point.with(1, 2))).to.true
    })
    it("should add scalars", function () {
        expect(point.add(4).isEqual(Point.with(5, 6))).to.true
    })
    it("should add point", function () {
        expect(Point.with(1, 2)
            .addPoint(Point.with(4, 7))
            .isEqual(Point.with(5, 9))).to.true
    })
    it("should sub scalars", function () {
        expect(Point.with(1, 2).sub(4).isEqual(Point.with(-3, -2))).to.true
    })
    it("should sub point", function () {
        let withPoint = Point.with(5, 5)
        expect(withPoint.subPoint(Point.with(1, 1)).isEqual(Point.with(4, 4))).to.true
    })
    it("should translate", function () {
        expect(Point.with(1, 1).translate(2, -2).isEqual(Point.with(3, -1))).to.true
    })
    it("should translate x", function () {
        expect(Point.with(1, 1).translateX(4).isEqual(Point.with(5, 1))).to.true
    })
    it("should translate y", function () {
        expect(Point.with(1, 1).translateY(4).isEqual(Point.with(1, 5))).to.true
    })
    it("should multiply scalar", function () {
        expect(Point.with(1, 5).multiply(5).isEqual(Point.with(5, 25))).to.true
    })
    it("should multiply point", function () {
        expect(Point.with(1, 5).multiplyPoint(Point.with(5, 6)).isEqual(Point.with(5, 30))).to.true
    })
    it("should give distance", function () {
        expect(Point.with(5, 0).distanceTo(Point.with(0, 0))).to.equal(5)
    })
    it("should transpose itself", function () {
        expect(Point.with(1, 5).transpose().isEqual(Point.with(5, 1))).to.true
    })
    it("should negate", function () {
        expect(Point.with(5, 6).negate().isEqual(Point.with(-5, -6))).to.true
    })
    it("should test if both 0", function () {
        expect(Point.with(0, 0).isZero()).to.true
        expect(Point.with(1, 0).isZero()).to.false
    })
})