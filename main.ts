/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function sumJumpLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump,
    0
  );
}

/*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  // return student.name == 'Sebastian' && student.handedInOnTime && student.passed ? 'VG' : 'IG';

  if (student.name == 'Sebastian' && student.handedInOnTime && student.passed) {
    return 'VG';
  }
  return 'IG';

  // Två alternativ med ternary operator och utan
}

/*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */

class Temperature {
  constructor(
    public city: string,
    public week: Date,
    public temperature: number
  ) {}
}

function averageWeeklyTemperature(readings: Temperature[]) {
  // let result = 0;
  // let pastWeek = Date.now() - 604800000;

  // for(let i = 0; i< readings.length; i++) {
  //   if(readings[i].city === 'Stockholm' && readings[i].week.getTime()> pastWeek){
  //     result += readings[i].temperature
  //   }
  // }

  // return result / 7;

  let pastWeek = Date.now() - 604800000;

  return (
    readings
      .filter(
        (reading) =>
          reading.city === 'Stockholm' && reading.week.getTime() > pastWeek
      )
      .reduce((sum, reading) => sum + reading.temperature, 0) / 7
  );

  // två alternativ en med samma struktur men bättre variabel namn och en med lite svårare syntax + bättre variabelnamn
}

/*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */

function showProduct(
  name: string,
  price: number,
  amount: number,
  description: string,
  image: string,
  parent: HTMLElement
) {
  const container = document.createElement('div'),
    productName = document.createElement('h4'),
    productPrice = document.createElement('span'),
    productAmount = document.createElement('input'),
    productDescription = document.createElement('p'),
    productImage = document.createElement('img'),
    productAmountContainer = document.createElement('div');

  productName.innerHTML = name;
  productPrice.innerHTML = `${price}`;
  productAmount.type = 'number';
  productAmount.value = `${amount}`;
  productDescription.innerHTML = description;
  productImage.src = image;
  productImage.alt = `image of ${name}`;

  productAmountContainer.append(productPrice, productAmount);
  container.append(
    productImage,
    productName,
    productAmountContainer,
    productDescription
  );
  parent.appendChild(container);
}

/*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
function presentStudents(students: Student[]) {
  students.forEach((student) => {
    let container = document.createElement('div');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = student.handedInOnTime;

    container.appendChild(checkbox);
    let listOfStudents = document.querySelector(
      student.handedInOnTime ? 'ul#passedstudents' : 'ul#failedstudents'
    );
    listOfStudents?.appendChild(container);
  });
}

/*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
function concatenateStrings() {
  const result = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'].join(' ');
  return result;

  //alternativt

  // return ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'].join(' ');
}

/* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */

// Alternativ 1 med ett objekt som parameter
function createUser(user: {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}) {
  let ageDiff = Date.now() - user.birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (!(userAge < 20)) {
    // Logik för att skapa en användare
  } else {
    return 'Du är under 20 år';
  }
}

// Alternativ 2 med en klass som parameter
class User {
  constructor(
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string
  ) {}
}

function createUserByClass(user: User) {
  let ageDiff = Date.now() - user.birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (!(userAge < 20)) {
    // Logik för att skapa en användare
  } else {
    return 'Du är under 20 år';
  }
}

// Alternativ 3 med interface som parameter
interface UserInterface {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}

function createUserByInterface(user: UserInterface) {
  let ageDiff = Date.now() - user.birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (!(userAge < 20)) {
    // Logik för att skapa en användare
  } else {
    return 'Du är under 20 år';
  }
}
