const Encore = require('@symfony/webpack-encore');

Encore
    // Répertoire de sortie
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    
    // Ajouter l'entrée React
    .addEntry('react-app', './assets/project-site-lineda-react/src/index.tsx')

    // Activer React et TypeScript
    .enableReactPreset()
    .enableTypeScriptLoader()

    // Autres options recommandées
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();
