"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT部門 - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定してください');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log('会計部門 - ID: ' + this.id);
    }
}
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
accounting.mostRecentReport = '通期会計レポート';
accounting.addReport('something');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();
//# sourceMappingURL=app.js.map