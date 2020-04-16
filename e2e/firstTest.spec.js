/* eslint-disable no-undef */

describe('Counter', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('can navigate to details screen', async () => {
    await element(by.id('HomeToDetailsButton')).tap();
    await expect(element(by.id('Count'))).toBeVisible();
  });

  it('if "+" pressed, can increase the count', async () => {
    await element(by.id('HomeToDetailsButton')).tap();
    const plus = await element(by.id('PlusButton'));
    const count = await element(by.id('Count'));
    await plus.tap();
    await plus.tap();
    await plus.tap();
    expect(count).toHaveText('3');
  });
});
