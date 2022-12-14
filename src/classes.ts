abstract class Department {
  static fiscalYear = 2020;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;
  // console.log(this)
  // console.log(`Department (${this.id}): ${this.name}`);

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT部門 - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  //   クラスプロパティを使ってAccountingDepartmentのインスタンスを保持する
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  // インスタンスがあるか確認する。
  // あったら既存を使いなかったら生成する
  static getInstance() {
    // this.instanceでもOK(このthisはAccountingDepartmentを指す)
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log('会計部門 - ID: ' + this.id);
  }
}

// const accounting = new AccountingDepartment('D1', []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

accounting.mostRecentReport = '通期会計レポート';

accounting.addReport('something');
//accounting.printReports()
console.log(accounting.mostRecentReport);

// accounting.describe()

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();

//accounting.printEmployeeInformation()
