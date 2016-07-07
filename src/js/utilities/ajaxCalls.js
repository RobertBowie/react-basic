import * as $ from 'jquery';

export function dbDelete(key) {
  $.ajax({
    url: 'http://127.0.0.1:7777/api/todoItems/' + key,
    contentType: 'application/json',
    method: 'delete'
  }, msg => console.log(msg) );
}

export function dbPost(item, context) {
  $.post({
    url: 'http://127.0.0.1:7777/api/todoItems',
    data: JSON.stringify(item),
    contentType: 'application/json'
  }, addedItem => {
    let items = context.state.items;
    let newItem = addedItem;
    newItem.style = JSON.parse(addedItem.style);
    items.push(newItem);
    context.setState({items});
  });
}

export function get(context) {
  $.get('http://127.0.0.1:7777/api/todoItems', result => {
    const itemsArr = result.map(item => {
      return {content: item.content, style: JSON.parse(item.style), _id: item._id};
    });
    context.setState({items: itemsArr});
  });
}

export function put(key, style) {
  $.ajax({
    url: 'http://127.0.0.1:7777/api/todoItems/' + key,
    contentType: 'application/json',
    method: 'put',
    data: JSON.stringify(style)
  }, msg => console.log(msg) );
}
