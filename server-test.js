
describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table on updateServerTable()', function () {
    submitServerInfo();

    let newServerRow = document.querySelectorAll('#serverTable tbody tr');
    expect(newServerRow.length).toEqual(1);

    let serverNameTd = newServerRow[0].childNodes[0].innerText;
    expect(serverNameTd).toEqual('Alice');
  });

  afterEach(function() {
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});

/// etc
