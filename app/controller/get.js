module.exports = app => {
    class getController extends app.Controller { *
        index() {
            this.ctx.body = 'Hello world';
        }
    }
    return getController;
};