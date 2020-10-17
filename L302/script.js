let input = prompt('შეიტანე ტექსტი', '');
if (input.length > 15) {
    input = input.substr(0, 15) + '...';
}
alert(input);