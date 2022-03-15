const fs = require("fs");

class FileManager {
  static writeFile(textFile, content) {
    return fs.appendFile(textFile, content + "\n", (error) => {
      if (error) console.log(error);
    });
  }
  static clearFile(textFile) {
    return fs.writeFile(textFile, "", () =>
      console.log("Text file is cleared")
    );
  }
}

module.exports = {
  FileManager,
};
