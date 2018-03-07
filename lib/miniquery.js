class SweetSelector {
  static select(input){
    if (input[0] == '#') {
      return document.querySelector(input);
    } else if (input[0] == '.') {
      let doc = document.querySelectorAll(input);
      if (doc.length == 1) {
        return  document.querySelector(input);
      }
      return doc;
    } else if (input[0] != '.' && input[0] != '#') {
      return document.querySelector(input);
    }
  }
}
