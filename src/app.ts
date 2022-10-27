type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;

}

// AdminとEmployeeを持ってる型
// &で合体
type ElevatedEmploee = Admin & Employee;

const e1: ElevatedEmploee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date
}


type Combinable = string | number
type Numeric = number | boolean;

// CombinableとNumericで共通しているのがnumberなのでnumber型になる
type Universal = Combinable & Numeric