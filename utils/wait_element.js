const EC = protractor.ExpectedConditions;
const elementFinderTimeout = 10000;

async function waitElement(func, timeout) {
  try {
    await browser.wait(func, timeout);
    return true;
  } catch (error) {
    return false;
  }
}

async function waitElementVisibility(elem, timeout = elementFinderTimeout) {
  return waitElement(EC.visibilityOf(elem), timeout);
}

async function waitElementPresent(elem, timeout = elementFinderTimeout) {
  return waitElement(EC.presenceOf(elem), timeout);
}

async function waitElementStale(elem, timeout = elementFinderTimeout) {
  return waitElement(EC.stalenessOf(elem), timeout);
}

async function waitElementToBeClickable(elem, timeout = elementFinderTimeout) {
  return waitElement(EC.elementToBeClickable(elem), timeout);
}

module.exports = {
  waitElementVisibility,
  waitElementPresent,
  waitElementStale,
  waitElementToBeClickable
};