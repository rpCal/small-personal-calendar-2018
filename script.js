
document.addEventListener("DOMContentLoaded", () => {
    // dla jakiego miesiaca/roku kalendarz?
    let month = 11; // zakres 1-12
    let year = 2018;

    let liczba_dni_w_miesiacu = new Date(Date.UTC(year, month, 0, 0, 0, 0)).getDate();
    let przesuniecie_tygodnia = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0)).getDay();
    let licznik_dni = 0 - przesuniecie_tygodnia + 1; 
    
    let tygodnie_dom = document.querySelectorAll('.tydzien');
    let tygodnie_arr = Array.from(tygodnie_dom);

    let szerokosc_komorki_w_px = 20;
    let komorka_dom = document.querySelector('.komorka')
    if(komorka_dom != null){
        szerokosc_komorki_w_px = komorka_dom.getBoundingClientRect().width;
    }

    const makeDayNumber = (number, leftOffset) => {
        let day_number = document.createElement('div')
        day_number.innerHTML = "" + number;
        day_number.style.left = `${leftOffset}px`;
        return day_number;
    }

    tygodnie_arr.forEach((tydzien_dom) => {
        let wynik_wrapper = document.createElement('div');
        wynik_wrapper.classList.add('dni-tygodnia-numery-wrapper')
    
        for(let i = 0; i < 7; i++){
            licznik_dni = licznik_dni + 1;
            let czyWyswietlicNumer = licznik_dni >= 1 && licznik_dni <= liczba_dni_w_miesiacu;
            if(czyWyswietlicNumer){
                let przesuniecie_w_lewo_w_px = i * (szerokosc_komorki_w_px * 2);
                wynik_wrapper.appendChild(makeDayNumber(licznik_dni, przesuniecie_w_lewo_w_px));
            }
        }
        
        tydzien_dom.appendChild(wynik_wrapper);
    })
});