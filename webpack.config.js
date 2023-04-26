const path = require('path');

module.exports = {
  // Otras opciones de configuración de Webpack aquí...
  
  module: {
    rules: [
      {
        test: /\.webm$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/'
            }
          }
        ]
      }
    ]
  }
}
