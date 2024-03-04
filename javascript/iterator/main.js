const app = document.getElementById('app');

const $listContainer = document.createElement('ul');

const itemList = [{
  "id": 1,
  "name": "홍길동"
},
{
  "id": 2,
  "name": "이몽룡"
}, {
  "id": 3,
  "name": "변사또"
}];

for (const item of itemList) {
  const $list = document.createElement("li");
  $list.textContent = item.name;
  $listContainer.appendChild($list);
}

app.appendChild($listContainer)

console.log($listContainer.childNodes);
console.log($listContainer.children);