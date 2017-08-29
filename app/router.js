// app/router.js
module.exports = app => {
    // app.get('/', app.controller.home.index);
    app.get('/get', app.controller.get.index);
};