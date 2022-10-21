// Backend
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const port = 4000;

// let players = {}

const main = async () => {
  const { geckos } = await import("@geckos.io/server");

  const io = geckos();

  io.addServer(server);
  io.onConnection((channel) => {
    console.log("ID ", channel.id);

    // players[channel.id] = {
    //   playerId: channel.id,
    //   name: randomName,
    // }

    setInterval(() => {
      const randomName = Math.random().toString(36).substring(7);
      channel.emit("app_android", randomName);
    }, 4000);

    // channel.on('message', (data) => {
    //   const obj = { name: players[channel.id].name, message: data.message }
    //   channel.room.emit('message-for-all', obj)
    // })

    // console.log(channel)

    // channel.onDisconnect(() => {
    //   delete channel.id;
    //   console.log(`${channel.id} got disconnected`)
    // })
  });

  // create a GET route
  app.get("/", (req, res) => {
    res.send({ response: "I am alive" }).status(200);
  });

  server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
};

main();
