export class LoginPage {
  //   username_textbox: any;
  // await page.goto('https://dev.esti-mateelectrical.bhsoft.co/login');
  // await page.locator('input[type="email"]').click();
  // await page.locator('input[type="email"]').fill('namnn.bhsoft@gmail.com');
  // await page.locator('input[type="password"]').click();
  // await page.locator('input[type="password"]').fill('BHTest123');
  // await page.getByRole('button', { name: 'Sign in' }).click();

  page: any;
  email_textbox: any;
  password_textbox: any;
  login_button: any;
  url: any;
  constructor(page: any) {
    this.page = page;
    this.url = page.goto("https://dev.esti-mateelectrical.bhsoft.co/login");
    this.login_button = page.getByRole("button", { name: "Sign in" });
    this.email_textbox = page.locator('input[type="email"]');
    this.password_textbox = page.locator('input[type="password"]');
  }
  async login(email: string, password: string) {
    await this.email_textbox.fill(email);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}