const devices = require("../../data/sample-devices.json");
const status = require("../../data/sample-status.json");

module.exports = {
  getData: async (req, res) => {
    let renameProperty = JSON.stringify(status.status).replace(
      /"deviceId":/g,
      '"id":'
    );
    const cameraStatus = JSON.parse(renameProperty);
    const nameOfDevice = devices.devices;

    let mergeData = [
      ...[cameraStatus, nameOfDevice]
        .reduce(
          (m, arr) => (
            arr.forEach(
              obj =>
                (m.has(obj.id) && Object.assign(m.get(obj.id), obj)) ||
                m.set(obj.id, obj)
            ),
            m
          ),
          new Map()
        )
        .values()
    ];
    res.status(200).send(mergeData);
  }
};
