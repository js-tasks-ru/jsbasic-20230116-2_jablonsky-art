function makeFriendsList(friends) {
  let itemUl = document.createElement("ul");
  for (let item of friends) {
    let itemLi = document.createElement("li");
    itemLi.innerHTML = `${item.firstName} ${item.lastName}`;
    itemUl.appendChild(itemLi);
  }
  return itemUl;
}
