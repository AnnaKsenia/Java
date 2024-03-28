
        let infoPazient=["Иванов", " Иван", " Иванович",  15, " мая",  1974, " м"];
        console.log (infoPazient);
        console.log (infoPazient[0]);
        console.log (infoPazient[1]);
        console.log (infoPazient[2]);
        console.log (infoPazient[3]);
        console.log (infoPazient[4]);
        console.log (infoPazient[5]);
        console.log (infoPazient[6]);
        var person = {
            "SNILS 1": ["Иванов", "Иван", "Иванович", 15, "мая", 1974, "м", "исполнено"],
            "SNILS 2": ["Рубакина", "Анна", "Александровна", 3, "февраля", 2004, "ж", "медотвод"],
            "SNILS 3": ["Стефаненко", "Ксения", "Александровна", 30, "ноября", 2004, "ж", "назначено" ],
        };
        /*console.log(person);
        SNILS4="SNILS4"
        person.SNILS4=[];
        console.log(person);
        let lastname;
        lastname=prompt ("Введите фамилию пациента", lastname);
        //console.log (lastname);
        infoPazient [0] = lastname;
        console.log (infoPazient);
        let name;
        name=prompt ("Введите имя пациента", name);
        //console.log (name);
        infoPazient [1] = name;
        console.log (infoPazient);
        let fathername;
        fathername=prompt ("Введите отчество пациента", fathername);
        //console.log (fathername);
        infoPazient [2] = fathername;
        console.log (infoPazient);
        let day;
        lastname=prompt ("Введите день рождения пациента", day);
        //console.log (day);
        infoPazient [3] = day;
        console.log (infoPazient);
        let month;
        lastname=prompt ("Введите месяц рождения пациента", month);
        //console.log (month);
        infoPazient [4] = month;
        console.log (infoPazient);
        let year;
        lastname=prompt ("Введите год рождения пациента", year);
        //console.log (year);
        infoPazient [5] = year;
        console.log (infoPazient);
        let gender;
        lastname=prompt ("Введите пол пациента", gender);
        //console.log (gender);
        infoPazient [6] = gender;
        console.log (infoPazient);*/

        let SNILS;
        var FirstFunction = function (person,SNILS) {
        SNILS=prompt("Введите SNILS пациента", SNILS);
        infoname=person [SNILS];
        //console.log (infoname);
        alert("Информация о пациенте: " + infoname);
        statusPriv = person[SNILS][7];
        console.log(statusPriv);
        }


        /*let phase;
        phase=prompt("Введите действие или медотвод или назначено или исполнено", phase);
        infoname.push(phase);
        console.log(infoname);
        person[SNILS]=infoname;
        console.log(person);*/

        //Извлекаем информацию о текущем статусе прививки
        SecondFunction = function (statusPriv, infoname) {

        
        //Проверяем возможность измнения статуса
        if (statusPriv === "исполнено") {
            alert("Отказано  в прививке пациенту" + infoname);
        } else if (statusPriv === "медотвод") {
            alert("Отказано в прививке пациенту" + infoname);
        } else {
            alert("Иполнить прививку пациенту" + infoname);
        }
        }
        ForSecond = FirstFunction(person,SNILS);
        SecondFunction(statusPriv,infoname)

        //Предлагаем закончить или продолжить работу в этом окне
        while(confirm("Продолжить проверку прививочного статуса?")); {
        ForSecond = FirstFunction(person,SNILS);
        SecondFunction(statusPriv, infoname);
        } 
        console.log("Сеанс проверки прививочного статуса закончен");
