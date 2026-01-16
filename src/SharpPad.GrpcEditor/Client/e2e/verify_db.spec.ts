import { test, expect } from '@playwright/test';

test('connect to postgres and run query', async ({ page }) => {
  test.setTimeout(120000); // 2 minutes total timeout

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000);
  await page.click('button[title="Manage Connections"]');
  await page.click('button:has-text("+ New Connection")');
  
  const connName = `Test PG ${Date.now()}`;
  await page.fill('input[placeholder="My Database"]', connName);
  await page.selectOption('select.input', 'PostgreSQL');
  await page.fill('textarea.input', 'Host=localhost;Port=54322;Database=mom;Username=postgres;Password=postgres;SearchPath=mom');
  
  await page.click('button:has-text("Save")');
  
  // Find the row containing the unique name
  const row = page.locator('div.flex-row', { hasText: connName }).first();
  await row.locator('button[title="Connect"]').click();
  
  // Wait up to 60s for connection
  try {
    await expect(page.locator('.modal-overlay')).not.toBeVisible({ timeout: 60000 });
  } catch (e) {
    const errorEl = page.getByTestId('error-message').first();
    if (await errorEl.isVisible()) {
        const errorMsg = await errorEl.innerText();
        console.error('Connection Failed:', errorMsg);
        throw new Error(`Connection Failed: ${errorMsg}`);
    }
    await page.screenshot({ path: 'connection_failure.png' });
    throw e;
  }
  
  // Type Query
  await page.click('.monaco-editor');
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('DB.db.Queryable<mom_lot>().Take(1).ToList().Dump("Mom Lot Data");');
  await page.waitForTimeout(1000); // Wait for type

  // Run Query
  await page.click('button:has-text("Run ▶")');
  
  // Verify Output
  await expect(page.locator('text=Mom Lot Data')).toBeVisible({ timeout: 60000 });
  
  await page.screenshot({ path: 'verification_success.png' });
});
