document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestbook-form');
    const messageList = document.getElementById('message-list');
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    // 渲染留言
    function renderMessages() {
        messageList.innerHTML = '';
        messages.forEach((message, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${message.name}</strong>: ${message.content}
                <button class="delete-btn" data-index="${index}">删除</button>
            `;
            messageList.appendChild(li);
        });
    }

    // 提交留言
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const content = document.getElementById('message').value;

        if (name && content) {
            messages.push({ name, content });
            localStorage.setItem('messages', JSON.stringify(messages));
            renderMessages();
            form.reset();
        }
    });

    // 删除留言
    messageList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            messages.splice(index, 1); // 从数组中移除该留言
            localStorage.setItem('messages', JSON.stringify(messages)); // 更新存储
            renderMessages(); // 重新渲染留言列表
        }
    });

    // 初始化渲染
    renderMessages();
});