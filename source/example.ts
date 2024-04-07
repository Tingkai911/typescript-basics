export module Example {
    export function Run() {
        // Arrays
        let numbers: number[] = [1, 2, 3];
        console.log(numbers);

        // Tuples
        let user: [number, string] = [1, "John"];
        // user.push(1); // DO NOT DO THIS!!!
        console.log(user);

        // Enums
        enum Size {Small = 1, Medium, Large}
        console.log(Size.Small)

        // function
        function calculateTax(income: number, taxYear: number = 2022): number {
            if (taxYear < 2022) {
                return income * 1.2;
            }
            return income * 1.3;
        }
        calculateTax(10_000);
        calculateTax(20_000, 2023);

        // Objects - not very reusable
        let employee: {
            readonly id: number,
            name: string,
            retire: (date: Date) => void
        } = {
            id: 1,
            name: "John",
            retire: (date: Date) =>  {
                console.log(date);
            }
        }
        console.log(employee);

        // Type aliases
        type Employee = {
            readonly id: number,
            name: string,
            retire: (date: Date) => void
        }
        let employee2: Employee = {
            id: 2,
            name: "Joh",
            retire: (date: Date) =>  {
                console.log(date);
            }
        }
        console.log(employee2);

        // Union types - parameter or function can be either number or string
        function kgToLbs(weight: number | string): number {
            // Narrowing
            if (typeof weight === "number") {
                return weight * 2.2;
            }
            else {
                return parseInt(weight) * 2.2;
            }
        }
        kgToLbs(10);
        kgToLbs('10kg');

        // Intersection - an object that is both types at the same time
        type Draggable = {
            drag: () => void
        }
        type Resizable = {
            resize: () => void
        }
        type UIWidget = Draggable & Resizable;
        // Need to implement both drag and resize method
        let textBox: UIWidget = {
            drag: () => {},
            resize: () => {}
        }
        console.log(textBox);

        // Literal Types - exact/specific value
        // quantity can only be 50 or 100
        type Quantity = 50 | 100;
        let quantity: Quantity = 100;
        console.log(quantity)
        type Metric = "cm" | "inch";
        let metric: Metric = "cm";
        console.log(metric);

        // Nullable Types
        function greet(name: string | null | undefined) {
            if (name) {
                console.log(name.toUpperCase());
            }
            else {
                console.log("Hello!");
            }
        }
        greet(null);
        greet(undefined);

        // Optional Chaining
        type Customer = {
            birthday?: Date
        }
        function getCustomer(id: number): Customer | null | undefined{
            return id === 0 ? null : {birthday: new Date()}
        }
        let customer = getCustomer(0);
        // Optional property access operator, only access the birthday if the customer is not null or undefined
        console.log(customer?.birthday?.getFullYear());
        // Optional element access operator
        console.log(numbers?.[0])
        // Optional call
        let log: any = (message: string) => console.log(message);
        log?.("a");
    }
}
