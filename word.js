document.addEventListener("DOMContentLoaded", function() {
    // 定义管理员密码
    const adminPassword = "lmr188"; // 你可以根据需要修改这个密码

    // 添加名言功能
    document.getElementById("quoteForm").addEventListener("submit", function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        // 获取用户输入
        const quoteText = document.getElementById("quoteText").value.trim();
        const author = document.getElementById("author").value.trim();
        const password = document.getElementById("password").value.trim();

        // 检查密码是否正确
        if (password !== adminPassword) {
            alert("密码错误，无法添加名言！");
            return;
        }

        // 创建新的名言卡片
        const newQuote = document.createElement("div");
        newQuote.classList.add("quote");
        newQuote.innerHTML = `
            <p>${quoteText}</p>
            <cite>—— ${author}</cite>
            <button class="delete-quote">删除</button>
        `;

        // 将新名言添加到页面中
        const quoteWall = document.querySelector(".quote-wall");
        quoteWall.appendChild(newQuote);

        // 清空输入框
        document.getElementById("quoteText").value = "";
        document.getElementById("author").value = "";
        document.getElementById("password").value = "";
    });

    // 删除名言功能
    document.querySelector(".quote-wall").addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-quote")) {
            const password = prompt("请输入管理员密码：");
            if (password !== adminPassword) {
                alert("密码错误，无法删除名言！");
                return;
            }
            const quote = event.target.closest(".quote");
            if (confirm("确定要删除这条名言吗？")) {
                quote.remove();
            }
        }
    });
});