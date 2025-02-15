import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Note-mate API",
      version: "1.0.0",
      description: "API documentation for the note-mate web app and Chrome extension",
      contact: {
        name: "Shreesammat Joshi",
        email: "your.email@example.com",
      },
    },
    servers: [
      {
        url: "http://walrus-app-s94dg.ondigitalocean.app", // Change to production URL when deployed
        description: "Backend server",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to your route files
};

const swaggerSpec = swaggerJsDoc(options);

export { swaggerSpec, swaggerUi };