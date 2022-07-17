class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {}

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflowed!');
        }

        this.elements.push(element);
    }

    pop(): T {
        if (this.elements.length === 0) {
            throw new Error('The stack is empty!');
        }

        return this.elements.pop();
    }
}

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let num = new Stack<number>(5);

while (!num.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`);
    num.push(n);
}

while (!num.isEmpty()) {
    let n = num.pop();
    console.log(`Pop ${n} from the stack.`);
}
