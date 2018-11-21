
const { BaseActionWatcher } = require("demux")
const { NodeosActionReader } = require("demux-eos") // eslint-disable-line
const ObjectActionHandler = require("./ObjectActionHandler")
const handlerVersion = require("./handlerVersions/v1")
const actionHandler = new ObjectActionHandler([handlerVersion])
const actionReader = new NodeosActionReader(
  "http://127.0.0.1:4888",
  0,
)
const actionWatcher = new BaseActionWatcher(
  actionReader,
  actionHandler,
  250,
)
actionWatcher.watch()


// var ipfsAPI = require('ipfs-api');
//
// var ipfs = ipfsAPI({host: '127.0.0.1', port: '5001', protocol: 'http'})
//
// ipfs.files.cat('QmReJnPQ1AavknnU8D8w5qAh5VwvisrRdTg4oVPFZ3uqSr', function (err, file) {
//   if (err) {
//     throw err
//   }
//
//   console.log(file.toString('utf8'))
// })
