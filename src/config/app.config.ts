interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Book a table', 'Read menus', 'Edit personal information'],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage user information',
    'Manage restaurant bookings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/ce8582dd-f855-4173-a233-6388b03c229e',
};
