class Department {
    // name: string;
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department) {
        // console.log(this)
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)

    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');

    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }

}


const accounting = new AccountingDepartment('D1', ['Max']);
accounting.addReport('something')
accounting.printReports()
// accounting.describe();

// const accountingCopy = { name: 'Departmentクラスに必須',describe: accounting.describe }

// accountingCopy.describe();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe()
accounting.printEmployeeInformation()