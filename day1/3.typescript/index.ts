(() => {
    const num: number = 1;
    const bool: boolean = true;
    const str: string = '123';
    const arr: number[] = [1, 2, 3, 4]
    const arr2: string[] = ['1', '2']
    const arr3: [string, number, boolean | null | undefined] = ['1', 2, true]
    const fn = (num1: number, num2: number): string => {
        return num1 + num2 + '123'
    }
    fn(1, 2)
})();

// jade
// sass
// ts+es6
