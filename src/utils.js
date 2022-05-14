const {apiUrl, port} = require("./config");

const buildApiUrl = (endpoint) => {
    return process.env.NODE_ENV === "production" ? apiUrl + endpoint : `http://localhost:${port}${endpoint}`
}

module.exports = {
    buildApiUrl
}