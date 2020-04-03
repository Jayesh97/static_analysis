const fs = require("fs")
const path = require("path")
var current_path = __dirname
 
function traverse_with_dir(dir_path, result) {
  files = fs.readdirSync(dir_path)
  result = result
  files.forEach(function(file) {
    if (fs.statSync(dir_path + "/" + file).isDirectory()) {
        result = traverse_with_dir(dir_path + "/" + file, result)
    } 
    else{
        if(file.endsWith('.js')){
            result.push(path.join(dir_path, "/", file))
        }
    }
  })
  return result
}

exports.traverse_with_dir = traverse_with_dir;