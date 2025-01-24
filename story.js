document.addEventListener("DOMContentLoaded", function() {
    // 定义管理员密码
    const adminPassword = "lmr188"; // 你可以根据需要修改这个密码

    // 添加故事功能
    document.getElementById("storyForm").addEventListener("submit", function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取用户输入
        const title = document.getElementById("storyTitle").value.trim();
        const content = document.getElementById("storyContent").value.trim();
        const password = document.getElementById("password").value.trim();

        // 检查密码是否正确
        if (password !== adminPassword) {
            document.getElementById("passwordMessage").textContent = "密码错误！";
            return;
        }

        // 创建新的故事卡片
        const newStory = document.createElement("article");
        newStory.classList.add("story");
        newStory.innerHTML = `
            <h2>${title}</h2>
            <p class="story-content">${content}</p>
            <button class="toggle-story">展示</button>
            <button class="delete-story">删除</button>
        `;

        // 将新故事添加到页面中
        const storyContainer = document.querySelector(".story-container");
        storyContainer.appendChild(newStory);

        // 清空输入框
        document.getElementById("storyTitle").value = "";
        document.getElementById("storyContent").value = "";
        document.getElementById("password").value = "";
        document.getElementById("passwordMessage").textContent = "";
    });

    // 删除故事功能
    document.querySelector(".story-container").addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-story")) {
            const password = prompt("请输入管理员密码：");
            if (password !== adminPassword) {
                alert("密码错误，无法删除！");
                return;
            }
            const story = event.target.closest(".story");
            if (confirm("确定要删除这个故事吗？")) {
                story.remove();
            }
        }
    });

    // 展示/隐藏故事内容功能
    document.querySelector(".story-container").addEventListener("click", function(event) {
        if (event.target.classList.contains("toggle-story")) {
            const content = event.target.previousElementSibling; // 获取故事内容
            if (content.style.display === "none") {
                content.style.display = "block";
                event.target.textContent = "隐藏";
            } else {
                content.style.display = "none";
                event.target.textContent = "展示";
            }
        }
    });
});