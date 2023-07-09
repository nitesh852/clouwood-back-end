// // const express = require("express");
// // const http = require("http");
// // const socketIO = require("socket.io");
// // const cors = require("cors"); // Import the cors package

// // const app = express();
// // const server = http.createServer(app);
// // const io = socketIO(server);

// // // Use the cors middleware
// // app.use(cors());
// // let bedroomLightStatus = false;

// // io.on("connection", (socket) => {
// //   console.log("New client connected");

// //   socket.emit("bedroomLightStatus", bedroomLightStatus);

// //   socket.on("turnOnBedroomLight", () => {
// //     bedroomLightStatus = true;
// //     io.emit("bedroomLightStatus", bedroomLightStatus);
// //   });

// //   socket.on("turnOffBedroomLight", () => {
// //     bedroomLightStatus = false;
// //     io.emit("bedroomLightStatus", bedroomLightStatus);
// //   });

// //   socket.on("toggleBothBedroomLights", () => {
// //     bedroomLightStatus = !bedroomLightStatus;
// //     io.emit("bedroomLightStatus", bedroomLightStatus);
// //   });

// //   socket.on("disconnect", () => {
// //     console.log("Client disconnected");
// //   });
// // });

// // const port = 3001;
// // server.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// const express = require("express");
// const http = require("http");
// const socketIO = require("socket.io");
// const cors = require("cors");
// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// // Use the cors middleware
// app.use(cors());

// io.on("connection", (socket) => {
//   console.log("New client connected");

//   // Handle light control events
//   socket.on("turnOnBedroomLight", () => {
//     io.emit("bedroomLightStatus", true);
//   });

//   socket.on("turnOffBedroomLight", () => {
//     io.emit("bedroomLightStatus", false);
//   });

//   socket.on("toggleBothBedroomLights", () => {
//     io.emit("toggleBothBedroomLights");
//   });

//   socket.on("turnOnKitchenLight", () => {
//     io.emit("kitchenLightStatus", true);
//   });

//   socket.on("turnOffKitchenLight", () => {
//     io.emit("kitchenLightStatus", false);
//   });

//   socket.on("toggleBothKitchenLights", () => {
//     io.emit("toggleBothKitchenLights");
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });

// const port = 3001; // Or any port of your choice
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const express = require("express");
// const http = require("http");
// const socketIO = require("socket.io");
// const cors = require("cors");

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// // Use the cors middleware
// app.use(cors());

// // Define a route handler for the root URL
// app.get("/", (req, res) => {
//   res.send("Welcome to the Socket.IO server!");
// });

// io.on("connection", (socket) => {
//   console.log("New client connected");

//   // Handle light control events
//   socket.on("turnOnBedroomLight", () => {
//     io.emit("bedroomLightStatus", true);
//   });

//   socket.on("turnOffBedroomLight", () => {
//     io.emit("bedroomLightStatus", false);
//   });

//   socket.on("toggleBothBedroomLights", () => {
//     io.emit("toggleBothBedroomLights");
//   });

//   socket.on("turnOnKitchenLight", () => {
//     io.emit("kitchenLightStatus", true);
//   });

//   socket.on("turnOffKitchenLight", () => {
//     io.emit("kitchenLightStatus", false);
//   });

//   socket.on("toggleBothKitchenLights", () => {
//     io.emit("toggleBothKitchenLights");
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });

// const port = 3001; // Or any port of your choice
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  //   socket.on("join_room", (data) => {
  //     socket.join(data);
  //   });

  //   socket.on("send_message", (data) => {
  //     socket.to(data.room).emit("receive_message", data);
  //   });
  // });

  socket.on("toggleLight", (data) => {
    io.emit("lightStatus", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
