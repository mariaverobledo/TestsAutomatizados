import { test, expect } from '@playwright/test';
import { AlertPage } from '../pages/alert';

test('Validar alerta de demoqa', async ({ page }) => {
    const alertPage = new AlertPage(page);
    
    // Ir a la página
    await page.goto('https://demoqa.com/alerts');

    let alertMessage = '';

    // 1. Escuchar el popup antes de que aparezca para hacer clic en "Aceptar" y capturar su texto
    page.once('dialog', async (dialog) => {
        alertMessage = dialog.message(); // Guarda el texto del popup
        await dialog.accept();         // Paso 3: Hace clic en el botón "Aceptar" del popup
    });

    // 2. Paso 1: Hacer clic en el botón de la página
    await alertPage.clickAlertButton();

    // 4. Validar que el popup apareció y tenía el texto correcto
    expect(alertMessage).toBe('You clicked a button');
});