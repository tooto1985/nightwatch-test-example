module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('https://www.obdesign.com.tw')
      .pause(1000);
    client.expect.element('body').to.be.present;
    client.expect.element('.box1').to.have.css('display');
    client.expect.element('#txtSearchTextBox').to.be.an('input');
    client.setValue('#txtSearchTextBox', '上衣').pause(1000);
    client.expect.element('.header').to.be.visible;
    client.end();
  }
};
