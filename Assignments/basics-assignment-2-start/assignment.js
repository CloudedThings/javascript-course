const task3Element = document.getElementById('task-3', noParam);

function noParam() {
    alert("Function one!")
}

function showName(name) {
    alert(name)
}

noParam();
showName('Johnny');

task3Element.addEventListener('click', noParam);

function concatString(first, second, third) {
    let newString = first + ' ' + second + ' ' + third;
    return newString;
}

let msg = concatString('Some', 'random', 'text');
alert(msg);