export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'get-balance') {
      return fetch('https://console.anthropic.com/settings/billing', {credentials: "include"})
        .then(response => response.text())
        .then(body => body.match(/{\\"name\\":\\"lastActiveOrg\\",\\"value\\":\\"(.+?)\\"}/)![1])
        .then(uuid => fetch(`https://console.anthropic.com/api/organizations/${uuid}/prepaid/credits`, {credentials: "include"}))
        .then(response => response.json())
    }
  })
});
