import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "GoloSale API",
            version: "1.0.0",
            description: "API documentation",
        },
        servers: [
            {
                url: "http://localhost:3000/",
            },
            {
                url:"https://api.golosale.com/"
            }
        ],
    },

    // Scan all feature routes automatically
    apis: ["./server/features/**/**-routes.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;