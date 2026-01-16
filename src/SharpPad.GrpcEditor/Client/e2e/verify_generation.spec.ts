import { test, expect } from '@playwright/test';

test('create connection, generate models, and create project', async ({ page }) => {
  test.setTimeout(120000); 

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000);
  
  // 1. Open Connection Manager
  await page.click('button[title="Manage Connections"]');
  
  // 2. Create New Connection
  await page.click('button:has-text("+ New Connection")');
  const connName = `Test PG Gen ${Date.now()}`;
  await page.fill('input[placeholder="My Database"]', connName);
  await page.selectOption('select.input', 'PostgreSQL');
  await page.fill('textarea.input', 'Host=localhost;Port=54322;Database=mom;Username=postgres;Password=postgres;SearchPath=mom');
  await page.click('button:has-text("Save")');
  
  // 3. Find row
  const row = page.locator('div.flex-row', { hasText: connName }).first();
  
  // 4. Click Generate Models
  await row.locator('button[title="Generate Models"]').click();
  
  // 5. Verify Success Message
  await expect(page.locator('text=Models generated successfully')).toBeVisible({ timeout: 60000 });
  
  // 6. Verify Date appears
  await expect(row).toContainText(/Gen:/);
  
  // 7. Close Manager
  await page.click('button:has-text("Close")');
  
  // 8. Open New Project Modal
  await page.click('button[title="New Project"]');
  
  // 9. Enter Name and Select Connection
  await page.fill('input[value="New Project"]', `Project ${connName}`);
  
  // Find the select element. It's the second select in the page (first is project switcher).
  // Let's rely on the label "Link to Connection (Optional)"
  const modal = page.locator('div[style*="zIndex: 10000"]');
  const xpath = `//select/option[contains(text(), "${connName}")]`;
  const optionLocator = page.locator(xpath).first();
  await expect(optionLocator).toBeAttached({ timeout: 10000 });
  const value = await optionLocator.getAttribute('value');
  if (value) {
      await page.locator('form select').selectOption(value, { force: true });
  } else {
      throw new Error('Option not found');
  }
  
  // 10. Create
  await page.click('button:has-text("Create")');
  
  // 11. Verify Files Loaded (Look for Generated folder or Entity files)
  // FileExplorer renders items.
  await expect(page.locator('text=Query.cs').first()).toBeVisible();
  await expect(page.locator('text=Generated').first()).toBeVisible();
  // Generated folder might be collapsed or just visible
  // The mock data puts them in "Generated" path.
  // FileExplorer usually shows top level.
  // Check if "Generated" is visible in the file tree.
  // Note: FileExplorer implementation might vary.
  
  // 12. Run Query to verify context
  await page.click('.monaco-editor');
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('DB.db.Queryable<mom_lot>().Take(1).ToList().Dump("Mom Lot Data");');
  // await page.waitForTimeout(1000);
  await page.click('button:has-text("Run ▶")');
  await expect(page.locator('text=Mom Lot Data')).toBeVisible({ timeout: 60000 });
});
