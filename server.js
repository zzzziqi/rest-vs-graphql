// server.js
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const restRoutes = require("./routes/rest");
const schema = require("./graphql/schema");

const app = express();
const PORT = 3000;

// REST 路由
app.use("/api/users", restRoutes);

// GraphQL 路由
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // 浏览器可视化工具
  })
);

app.listen(PORT, () => {
  console.log(`REST API running at http://localhost:${PORT}/api/users`);
  console.log(`GraphQL running at http://localhost:${PORT}/graphql`);
});
