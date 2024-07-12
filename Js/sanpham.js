document.addEventListener('DOMContentLoaded', function() {
    const tabTitles = document.querySelectorAll('.tab-title');
    const tabs = document.querySelectorAll('.tab');

    tabTitles.forEach(title => {
        title.addEventListener('click', function() {
            tabTitles.forEach(title => title.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));

            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            this.classList.add('active');
        });
    });
});