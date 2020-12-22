```
// 调度中心
class PubSub {
  constructor() {
    this.subscribers = new Set();  // 缓存列表
  }
  subscribe(ob) {
    this.subscribers.add(ob);
  }
  unsubscribe(ob) {
    this.subscribers.delete(ob);
  }
  showsubscribe() {
    console.log([...this.subscribers])
  }
  publish(topic, params) {
    for (let ob of this.subscribers) {  // 遍历缓存列表
      ob.update(topic, params)
    }
  }
}
// 发布者：微信公众号
class WxBar {
  constructor(topic) {
    this.topic = topic;
  }
  // 推送文章
  pushArticle(pubSub, article) {
    console.log('push article');
    pubSub.publish(this.topic, article)
  }
}
// 订阅者：微信用户
class WxUser {
  constructor(name) {
    this.name = name;
  }
  update(topic, article) {
    console.log(this.name + ' receive article from ' + topic)
  }
}

let pubSub = new PubSub();

const wxBar = new WxBar("JS DP");
const livia = new WxUser('Livia');
const cindy = new WxUser('Cindy');

pubSub.subscribe(livia);
pubSub.subscribe(cindy);
wxBar.pushArticle(pubSub, {});
```
