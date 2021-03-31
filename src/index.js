import * as database from './database';

const buildMessageRow = (messageItem) => {
  const newMessageRow = document.createElement('tr');

  newMessageRow.setAttribute('id', messageItem.id);
  newMessageRow.innerHTML = `
    <td>${messageItem.message}</td>
    <td>${messageItem.votes}</td>
    <td>
      <i class="material-icons upvote">thumb_up</i>
      <i class="material-icons downvote">thumb_down</i>
      <i class="material-icons delete">delete</i>
    </td>
  `;

  // todo: consider using delegation for this instead
  newMessageRow.querySelector('.upvote').addEventListener('click', async () => {
    await database.messages.updateVotes(messageItem.id, 1);
    renderList();
  });
  newMessageRow.querySelector('.downvote').addEventListener('click', async () => {
    await database.messages.updateVotes(messageItem.id, -1);
    renderList();
  });
  newMessageRow.querySelector('.delete').addEventListener('click', async () => {
    await database.messages.delete(messageItem.id);
    renderList();
  });

  return newMessageRow;
};

const renderList = async () => {
  const listContainer = document.getElementById('message-container');

  // get latest messages
  const messages = await database.messages.getAll();
  
  // reset list container to empty
  listContainer.innerHTML = '';

  // remove children from list container
  messages.forEach((messageItem) => {
    const newMessageRow = buildMessageRow(messageItem);
    listContainer.append(newMessageRow);
  });
};


const onLoadHandler = async () => {
  // initial render of list
  await renderList();

  document.getElementById('submit').addEventListener('click', async (evt) => {
    evt.preventDefault();

    const newMessageInput = document.getElementById('newmessage');

    // lets wait for the new message to be created before we request to render the list
    await database.messages.create(newMessageInput.value);

    renderList();

    newMessageInput.value = '';
  });
};

// Wait for DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoadHandler);
} else {
  onLoadHandler();
}
