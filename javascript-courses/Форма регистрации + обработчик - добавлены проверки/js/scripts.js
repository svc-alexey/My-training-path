// функция проверяет данные,которые ввел пользователь в форму
// Проверка на:
// 1.Заполнены ли все поля
// 2.Использовались ли спецсимволы
// 3.В каком регистре введены данные
// 4.Сколько символов введено как пароль
// 5.Сколько символов введено как Имя
// 6.Совпадают ли пароли

const regUser = () => {
    let name = document.getElementById("name").value;
    let  email = document.getElementById("email").value;
    let  pass = document.getElementById("pass").value;
    let  repass = document.getElementById("repass").value;
    let  errorText = '';

    // console.log("Имя пользователя:" + name);
    if (name == '' || email == '' || pass == '' || repass == '') {
        errorText += "Заполните все поля!";
    }

    else {
        // проверка на спецсимволы
        if(name.match(/[\!\@#\$\%\^\&\*\(\)\+\=\-\[\]\\\'\;\,\/\{\}\|\"\:\<\>\?]/)) {
            errorText += "Только не спецсимволы!";
        }

        if ( pass !== repass) {
            errorText += "Пароли не совпадают!";
        }

        if( pass.length < 5 || pass.length > 30) {
            errorText += "Пароль от 5 до 30 символов";
        }

        if ( name.length <2 || name.length > 30) {
            errorText += "Имя от 2 до 30 символов";
        }

        console.log(name[0]);
        console.log(name[0].toUpperCase());
        if ( name[0] !== name[0].toUpperCase()) {
            errorText += "Имя должно быть с заглавной буквы";
        }
        

        // "9ITSTART2020"
        // строку с паролем преобразуем в массив    
        pass = pass.split('');
        // pass[0]

        let countNumber = 0;

        for (let i = 0; i < pass.length; i++) {
           for (let j = 0; j < 10; j++) {
               if(pass[i] == j) countNumber++;                           
           }            
        }

        if (countNumber !== 0) console.log("В составе пароля" + countNumber + "цифр");
        
    }

    alert(errorText);
}

