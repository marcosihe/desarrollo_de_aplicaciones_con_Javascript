const text = document.querySelector('#text');
const view = document.querySelector('#view');

const upDate = () => {
    view.srcdoc = text.value;
}