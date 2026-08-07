import {Locator, Page} from "@playwright/test";

export class AddClientTable {
    readonly page: Page;
    readonly btnAddClient: Locator;
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputEmail: Locator;
    readonly age: Locator;
    readonly salary: Locator;
    readonly department: Locator;
    readonly btnSubmit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnAddClient = page.locator('#addNewRecordButton');
        this.inputFirstName = page.locator('#firstName');
        this.inputLastName = page.locator('#lastName');
        this.inputEmail = page.locator('#userEmail');   
        this.age = page.locator('#age');
        this.salary = page.locator('#salary');
        this.department = page.locator('#department');
        this.btnSubmit = page.locator('#submit');
    }   
    
    async addClient(firstName: string, lastName: string, email: string, age: number, salary: number, department: string) {
        await this.btnAddClient.click();
        await this.inputFirstName.fill(firstName);
        await this.inputLastName.fill(lastName);
        await this.inputEmail.fill(email);
        await this.age.fill(age.toString());
        await this.salary.fill(salary.toString());
        await this.department.fill(department);
        await this.btnSubmit.click();
    }
}