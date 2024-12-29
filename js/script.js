function displayContent(index) {
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach((div, i) => {
        div.style.display = (i === index) ? 'inline-block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => displayContent(index));
    });
});
function displayContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(`content-${contentId}`).style.display = 'block';
}