var form = document.querySelector('form');
var button = form.querySelector('button');

let now = new Date();

let valueBirthday = form.querySelector('#birthday');
valueBirthday.setAttribute('max', (now.getFullYear() - 18) + '-' + (now.getMonth() + 1) + '-' + now.getDate())

let valueDate = form.querySelector('#date');
now.setDate(now.getDate() + 30);
valueDate.setAttribute('min', now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + 'T10' + ':' + now.getMinutes())

let Name = form.querySelector('#name');
Name.addEventListener('input', function() {
    let divname = form.querySelector('.Name');
    let regex = /^\s*[А-Яа-я]-*\s*/;
    let regex1 = /[0-9]/;

    if (regex.test(Name.value) && !regex1.test(Name.value)) {
        if (!!divname.querySelector('span')) {
            let del = divname.querySelector('span');
            del.remove();
            Name.className = '';
            button.disabled = false;
        }
    } else {
        Name.className = 'invalid';
        if (!!!divname.querySelector('span')) {
            let message = document.createElement('span');
            let txtMessage = document.createTextNode('Раскладка «кириллица». Может содержать «-», « ».');
            message.appendChild(txtMessage);
            divname.appendChild(message);
        } else {
            let div = divname.querySelector('span');
            div.textContent = 'Раскладка «кириллица». Может содержать «-», « ».'
        }
        button.disabled = true;
    }
});

let Inn = form.querySelector('#inn');
Inn.addEventListener('input', function() {
    let divInn = form.querySelector('.Inn');
    let regex = /\D/;
    if (regex.test(Inn.value)) {
        if (!!!divInn.querySelector('span')) {
            let message = document.createElement('span');
            let txtMessage = document.createTextNode('надо содержит только числа.');
            message.appendChild(txtMessage);
            divInn.appendChild(message);
        } else {
            let div = divInn.querySelector('span');
            div.textContent = 'надо содержит только числа.';
        }
        button.disabled = true;
    } else {
        Inn.className = '';
        if (!!divInn.querySelector('span')) {
            let del = divInn.querySelector('span');
            del.remove();
            button.disabled = false;
        }
    }
});




button.addEventListener('click', function(e) {
    revisionName(e);
    revisionBirthday(e);
    revisionInn(e)
    revisionEmail(e);
    revisionDate(e);
    revisionPhone(e);
});

function revisionName(e) {
    let name = form.querySelector('#name');
    let divName = form.querySelector('.Name');

    if (name.value == 0) {
        name.className = 'invalid';
        e.preventDefault();
        if (!!!divName.querySelector('span')) {
            let message = document.createElement('span');
            let txtMessage = document.createTextNode('Обязательность заполнения');
            message.appendChild(txtMessage);
            divName.appendChild(message);
        } else {
            let div = divName.querySelector('span');
            div.textContent = 'Обязательность заполнения';
        }
    } else {
        let validName = Name.value.split(/\s{1,}/);
        let nameResult = '';
        for (var i = 0; i < validName.length; i++) {
            if (validName[i] != '') {
                nameResult += validName[i];
                if (i < validName.length - 1 && validName[i + 1] != '') {
                    nameResult += ' ';
                }
            }
        }
    }
}

function revisionBirthday(e) {
    let birthday = form.querySelector('#birthday');
    let divBirthday = form.querySelector('.Birthday');

    if (birthday.value == 0) {
        birthday.className = 'invalid';
        e.preventDefault();
        if (!!!divBirthday.querySelector('span')) {
            let message = document.createElement('span');
            let txtMessage = document.createTextNode('Обязательность заполнения');
            message.appendChild(txtMessage);
            divBirthday.appendChild(message);
        } else {
            let div = divBirthday.querySelector('span');
            div.textContent = 'Обязательность заполнения';
        }
    } else {
        let dateInput = new Date(birthday.value);
        now = new Date();
        let ago = new Date('1950-01-01');
        if (dateInput > now || dateInput < ago) {
            if (!!!divBirthday.querySelector('span')) {
                let message = document.createElement('span');
                let txtMessage = document.createTextNode('дата недействительна');
                message.appendChild(txtMessage);
                divBirthday.appendChild(message);
            } else {
                let div = divBirthday.querySelector('span');
                div.textContent = 'дата недействительна';
            }
        }
    }
}

function revisionInn(e) {
    let inn = form.querySelector('#inn');
    let divInn = form.querySelector('.Inn');

    if (inn.value.length != 12 && inn.value.length != 0) {
        inn.className = 'invalid';
        e.preventDefault();
        if (!!!divInn.querySelector('span')) {
            let message = document.createElement('span');
            let txtMessage = document.createTextNode('Надо содержит 12 числа.');
            message.appendChild(txtMessage);
            divInn.appendChild(message);
        } else {
            let div = divInn.querySelector('span');
            div.textContent = 'Надо содержит 12 числа.';
        }
    }
}

function revisionEmail(e) {
    let email = form.querySelector('#email');
    let divEmail = form.querySelector('.Email');

    if (email.value == 0) {
        email.className = 'invalid';
        e.preventDefault();
        if (!!!divEmail.querySelector('span')) {
            let message = document.createElement('span');
            let txtMessage = document.createTextNode('Обязательность заполнения');
            message.appendChild(txtMessage);
            divEmail.appendChild(message);
        } else {
            let div = divEmail.querySelector('span');
            div.textContent = 'Обязательность заполнения';
        }
    } else {
        let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (regex.test(email.value)) {
            if (!!divEmail.querySelector('span')) {
                let del = divEmail.querySelector('span');
                del.remove();
            }
        } else {
            email.className = 'invalid';
            if (!!!divEmail.querySelector('span')) {
                let message = document.createElement('span');
                let txtMessage = document.createTextNode('Неправильно Email');
                message.appendChild(txtMessage);
                divEmail.appendChild(message);
            } else {
                let div = divEmail.querySelector('span');
                div.textContent = 'Неправильно Email';
            }
        }
    }
}

function revisionDate(e) {
    let date = form.querySelector('#date');
    let divDate = form.querySelector('.Date');

    if (date.value == 0) {
        date.className = 'invalid';
        e.preventDefault();
        if (!!!divDate.querySelector('span')) {
            let message = document.createElement('span');
            let txtMessage = document.createTextNode('Обязательность заполнения');
            message.appendChild(txtMessage);
            divDate.appendChild(message);
        }
    } else {
        let dateInput = new Date(date.value);
        if (dateInput < now) {
            if (!!!divDate.querySelector('span')) {
                let message = document.createElement('span');
                let txtMessage = document.createTextNode('Выбор даты возможен в ближайшие 30 дней');
                message.appendChild(txtMessage);
                divDate.appendChild(message);
            } else {
                let div = divDate.querySelector('span');
                div.textContent = 'Выбор даты возможен в ближайшие 30 дней';
            }
        }
        //console.log(dateInput.getDay());
        if (dateInput.getDay() == 0 || dateInput.getDay() == 6) {
            if (!!!divDate.querySelector('span')) {
                let message = document.createElement('span');
                let txtMessage = document.createTextNode('Нельзя выбрать выходной день');
                message.appendChild(txtMessage);
                divDate.appendChild(message);
            } else {
                let div = divDate.querySelector('span');
                div.textContent = 'Нельзя выбрать выходной день ';
            }
        }

        console.log(dateInput.getMonth());
        if (dateInput.getMonth() == 11 && dateInput.getDate() == 31) {
            if (!!!divDate.querySelector('span')) {
                let message = document.createElement('span');
                let txtMessage = document.createTextNode('Нельзя выбрать праздник');
                message.appendChild(txtMessage);
                divDate.appendChild(message);
            } else {
                let div = divDate.querySelector('span');
                div.textContent = 'Нельзя выбрать праздник';
            }
        }
    }
}

function revisionPhone(e) {
    let phone = form.querySelector('#phone');
    let divPhone = form.querySelector('.Phone');
    let regex = /^[7-8]\(9[0-9]{2}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/i;
    if (phone.value != 0) {
        if (!regex.test(phone.value)) {
            phone.className = 'invalid';
            e.preventDefault();
            if (!!!divPhone.querySelector('span')) {
                let message = document.createElement('span');
                let txtMessage = document.createTextNode('Неправильно, правильный формат: «8(9**)-***-**-**» или «7(9**)-***-**-**».');
                message.appendChild(txtMessage);
                divPhone.appendChild(message);
            }
        } else {
            if (!!divPhone.querySelector('span')) {
                let message = divPhone.querySelector('span');
                message.remove();
            }
        }

    }
}