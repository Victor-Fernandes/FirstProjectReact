const path = require('path')

module.exports =  {
  entry: path.resolve(__dirname, 'src', 'index.js'), //file de entrada
  output: {
    //onde vai jogar o códgido trasnpilado pelo webpack
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: { //atualiza a build e faz reload da page automaticamente
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      //informa para qual tipo de arquivo o que deve utilizar
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
