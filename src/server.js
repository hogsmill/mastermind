const fs = require('fs')
const ON_DEATH = require('death')({uncaughtException: true})

ON_DEATH(function(signal, err) {
  let logStr = new Date()
  if (signal) {
    logStr = logStr + ' ' + signal + '\n'
  }
  if (err && err.stack) {
    logStr = logStr + '  Error: ' + err.stack + '\n'
  }
  fs.appendFile('server.log', logStr, function (err) {
    if (err) console.log(logStr)
    process.exit()
  })
})
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const os = require('os')

var prod = os.hostname() == "agilesimulations" ? true : false

var connectDebugOff = prod
var debugOn = !prod

var connections = 0
var maxConnections = 10

function emit(event, data) {
  if (debugOn) {
    console.log(event, data);
  }
  io.emit(event, data)
}

io.on("connection", (socket) => {
  connections = connections + 1
  if (connections > maxConnections) {
    console.log(`Too many connections. Socket ${socket.id} closed`)
    socket.disconnect(0)
  } else {
    connectDebugOff || console.log(`A user connected with socket id ${socket.id}. (${connections} connections)`)
  }

  socket.on("disconnect", () => {
    connections = connections - 1
    connectDebugOff || console.log(`User with socket id ${socket.id} has disconnected. (${connections} connections)`)
  })

  socket.on("contexts", (data) => { emit("contexts", data) })

  socket.on("noSwitchTick", (data) => { emit("noSwitchTick", data) })

  socket.on("switchTick", (data) => { emit("switchTick", data) })
});

var port = process.argv[2] || 3005

http.listen(port, () => {
  console.log("Listening on *:" + port);
});
