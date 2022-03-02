class Point {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    static fromArray([x, y]){
        return new Point(x, y)
    }
    static with(x, y){
        return new Point(x, y)
    }
    isEqual(aPoint){
        return this.x == aPoint.x && this.y == aPoint.y
    }
    isZero(){
        return this.x == 0 && this.y == 0
    }
    add(aNumber){
        this.x+= aNumber
        this.y+= aNumber
        return this
    }
    addPoint(aPoint){
        this.x+= aPoint.x
        this.y+= aPoint.y
        return this
    }
    sub(aNumber){
        this.x-= aNumber
        this.y-= aNumber
        return this
    }
    subPoint(aPoint){
        this.x-= aPoint.x
        this.y-= aPoint.y
        return this
    }
    translate(aNumberx, aNumbery){
        this.x+=aNumberx
        this.y+=aNumbery 
        return this
    }
    translateX(aNumber){
        this.x+=aNumber 
        return this
    }
    translateY(aNumber){
        this.y+=aNumber 
        return this
    }
    multiply(aNumber){
        this.x*=aNumber
        this.y*=aNumber
        return this
    }
    multiplyPoint(aPoint){
        this.x*= aPoint.x
        this.y*= aPoint.y
        return this
    }
    distanceTo(aPoint){
        return Math.sqrt(Math.pow(Math.abs(this.x - aPoint.x), 2) + Math.pow(Math.abs(this.y - aPoint.y), 2))
    }
    transpose(){
        [this.x, this.y] = [this.y, this.x]
        return this
    }
    negate(){
        [this.x, this.y] = [-this.x, -this.y]
        return this
    }
}

export default Point