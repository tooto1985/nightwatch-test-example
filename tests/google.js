const timeout = 10000
var baseUrl = 'http://localhost:2771'

module.exports = {
  '首頁': function (client) {
    client.url(baseUrl)
    client.waitForElementPresent('title', timeout)
    client.getTitle(function (title) {
      this.assert.equal(title.includes('首頁'), true)
    })
    client.waitForElementPresent('.header', timeout)
    void client.expect.element('.header').to.be.present

    client.waitForElementPresent('#vue-desktop-belt', timeout)
    void client.expect.element('#vue-desktop-belt').to.be.present

    client.waitForElementPresent('.Footer', timeout)
    void client.expect.element('.Footer').to.be.present

    client.moveToElement('.COPYRIGHT', 0, 0).pause(500)
    client.click('.box8>span>img')
    client.pause(500)
  },
  '多國語系設定': function (client) {
    client.click('#NowCurrency').pause(500)
    void client.expect.element('#login-modal').to.be.present
    client.click('#login-modal .close').pause(500)
    client.click('#NowCurrency').pause(500)
    client.click('#shopCancel').pause(500)
    client.click('#NowCurrency').pause(500)
    client.click('#TW').pause(500)
    client.click('#ddlRegion option[value="0"]').pause(500)
    client.click('#shopConfirm').pause(500)
  },
  '登入': function (client) {
    client.pause(500)
    client.click('a.member:nth-child(3)')
    client.waitForElementVisible('#btnLogin', timeout).pause(500)
    client.url(function (response) {
      client.url(response.value + (response.value.includes('?') ? '&' : '?') + '').pause(500)
    })
    client.setValue('#txtEmail', 'r1652354@mvrht.net')
    client.setValue('#txtPassword', '123456test').pause(500)
    client.click('#btnLogin').pause(500)
    client.waitForElementVisible('.box1', 99999).pause(500)
    client.execute('return window.IsMemberLogin;', [], function (response) {
      client.assert.equal(response.value, 'True')
    })
    client.pause(500)
  },
  '搜尋': function (client) {
    client.pause(500)
    client.expect.element('#txtSearchTextBox').to.be.an('input')
    client.setValue('#txtSearchTextBox', '外套')
    client.click('#btnSearch')
    client.waitForElementVisible('#QueryResult', timeout)
    void client.expect.element('#QueryResult').to.be.visible
    client.pause(500)
  },
  '館架頁': function (client) {
    client.pause(500)
    client.click('.main>.center>div>a:nth-child(1)').pause(500)
    client.waitForElementVisible('#tablenormal', timeout)
    void client.expect.element('.list').to.be.present
    client.pause(500)
  },
  '商品頁': function (client) {
    client.pause(500)
    // client.moveToElement('.list:last-child div:nth-child(1) a', 0, 0).pause(500)
    client.click('.list div:nth-child(2) a')
    client.windowHandles(function (result) {
      // var originalWindowHandle = result.value[0]
      var popUpWindowHandle = result.value[1]
      client.switchWindow(popUpWindowHandle)
    })
    client.waitForElementVisible('#product>div>img', timeout)
    client.pause(500)
  },
  '加入購物車': function (client) {
    client.pause(500)
    client.click('.colors>div:nth-child(2)>a').pause(500)
    client.click('.sizes>div:nth-child(2)>span').pause(500)
    client.click('.buy').pause(500)
    client.pause(500)
    client.click('#alertify-ok').pause(500)
    client.windowHandles(function (result) {
      var originalWindowHandle = result.value[0]
      // var popUpWindowHandle = result.value[1]
      client.closeWindow()
      client.switchWindow(originalWindowHandle)
    })
    client.pause(500)
  },
  '結帳': function (client) {
    client.pause(500)
    client.click('.cart>a')
    client.pause(timeout)
    client.end()
  }
}
