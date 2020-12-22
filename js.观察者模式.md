class WX {
  constructor(topic) {
    this.topic = topic;
    this.observes = new Set()
  }

  addOb(ob) {
    this.observes.add(ob)
  }

  removeOb(ob) {
    this.observes.delete(ob)
  }

  showOb() {
    for (let ob of this.observes) {
      console.log(ob.name)
    }
  }

  pushArticles(article) {

    for (let ob of this.observes) {
      ob.update(this.topic, article)
    }
  }
}

class User {
  constructor(name) {
    this.name = name
  }

  update(topic, article) {

    console.log(this.name + ' receive ' + article + ' from ' + topic)
  }
}

const wxJS = new WX('JS')
const Tom = new User('Tom')
const Jack = new User('Jack')

wxJS.addOb(Tom)
wxJS.addOb(Jack)

wxJS.pushArticles('原型')
