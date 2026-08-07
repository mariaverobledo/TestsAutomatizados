import {AddClientTable} from '../pages/AddClientTable';
import { test } from '@playwright/test';


test('Add Client', async({page}) =>{
    const addClientPage = new AddClientTable(page);
    await page.goto('https://demoqa.com/webtables');
    await addClientPage.addClient('John', 'Doe', 'john.doe@example.com', 30, 50000, 'Engineering');

});