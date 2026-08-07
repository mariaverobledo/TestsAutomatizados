import { LoginPage } from "../pages/Login";
import { loginData } from "../data/data";
import { test } from '@playwright/test';

test ('Login Successfull', async({page}) =>{
 const loginPage = new LoginPage(page);

 await page.goto(loginData.url);
 await loginPage.login(loginData.password,   loginData.user)
    


});