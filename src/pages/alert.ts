import { Locator, Page } from "@playwright/test";

export class AlertPage {
    readonly page: Page;
    readonly btnAlert: Locator;
    
    constructor(page: Page) {
        this.page = page;
        // Selector del botón que abre la alerta en demoqa.com/alerts
        this.btnAlert = page.locator('#alertButton');
    }

    // Paso 1: Hacer clic en el botón de la página
    async clickAlertButton() {
        await this.btnAlert.click();
    }
}