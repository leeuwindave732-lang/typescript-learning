// Static vs Instance Properties

// Unlike an instance property, a static property is shared among all instances of a class.

// Use the static keyword before a property or a method to make it static.

// to declare a static property, you use the static keyword.
//  To access a static property, you use the className.propertyName syntax. For example:
class Counter {
   // static property is shared among all instances
    static totalCounters = 0;

    // instance property unique to each object
    count: number = 0;

    constructor() {
        Counter.totalCounters += 1;  // update static property
    }

    // increment
    increment() {
        this.count += 1;
    }

    static showTotalCounters() {
        console.log(`Total counters created: ${Counter.totalCounters}`);
    }
}

const c1 = new Counter();
c1.increment();
const c2 = new Counter;
c2.increment(); // 1
c2.increment(); // 1+1

console.log("C1 count:", c1.count) // 1
console.log("C2 count:", c2.count) // 2

Counter.showTotalCounters();