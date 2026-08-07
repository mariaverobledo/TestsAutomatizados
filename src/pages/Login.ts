import { Locator, Page } from "@playwright/test";
import { loginData } from "../data/data";
export class LoginPage {

    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPass:Locator;
    readonly btnLogin: Locator;

    constructor (page: Page){
        this.page = page;

        this.inputUsername = page.locator('#username');
        this.inputPass = page.locator('#password');
        this.btnLogin = page.locator('#submit');
    }

    async goto(){

        await this.page.goto(loginData.url);
    }

    async login(user: string, password: string){
        await this.inputUsername.fill(user);
        await this.inputPass.fill(password);
        await this.btnLogin.click();
    }

}