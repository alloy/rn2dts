import Bar from 'some-other-module';

function foo(): number {
    return null as any;
}

function bar(): void {}

const x = {
    get AccessibilityInfo(): AccessibilityInfo {
        return null as any;
    },
}

Bar();

class SomeClass {
    render(): string {
        return null as any;
    }
}
