module.exports = function(app) {

    app.post('/autenticar', app.api.auth.autentica);
    app.use('/*', app.api.auth.verificaToken);
};
