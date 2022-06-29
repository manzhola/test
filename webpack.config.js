'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // для разработки (prodaction - для более оптимизированого кода)
  entry: './src/js/script.js', // В нём прописываються все импорты
  output: {
    filename: 'bundle.js', // выходной файл
    path: __dirname + '/js/' // путь куда помещаеться файл
  },
  watch: true, // в автоматическом режиме пересобирает проект

  devtool: "source-map", // 

  module: {} 
};
