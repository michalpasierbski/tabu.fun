<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Galindo&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="app.css">
    <meta name="description" content="Tabu">
    <title>Tabu.fun</title>
</head>
<body>
    <h1>Tabu.fun</h1>
    <main>
        <label for="lang">Język</label><br>
        <select name="lang" id="lang">
            <option value="eng">Angielski</option>
            <option value="" disabled>Inne języki wkrótce ;)</option>
        </select>
        <br>
        <label for="cat">Kategoria</label><br>
        <select name="cat" id="cat">
            <option value="it">IT</option>
            <option value="" disabled>Inne kategorie wkrótce ;)</option>
        </select>
        <br>
        <label for="time">Czas</label><br>
        <select name="time" id="time">
            <option value="30">30 sekund</option>
            <option value="45">45 sekund</option>
            <option value="60" selected>1 minuta</option>
            <option value="120">2 minuty</option>
            <option value="180">3 minuty</option>
            <option value="240">4 minuty</option>
            <option value="300">5 minut</option>
        </select>
        <br>
        <button id="graj">Graj</button>
    </main>
    <section class="loader">
        <div id="countdown">3</div>
    </section>
    <section class="game">
        <div class="timebar">
            <div class="timebar-fill"></div>
        </div>
        <div class="question">
            <span>Twoje hasło:</span>
            <div class="question-text"></div>
            <div class="question-answers">
                <span>Niedozwolone słowa:</span>
                <div class="question-answer">
                    <p></p>
                </div>
                <div class="question-answer">
                    <p></p>
                </div>
                <div class="question-answer">
                    <p></p>
                </div>
                <div class="question-answer">
                    <p></p>
                </div>
                <div class="question-answer">
                    <p></p>
                </div>
                <div class="question-answer">
                    <p></p>
                </div>
            </div>
            <div class="success-button">
                <button>Hasło odgadnięte</button>
            </div>
        </div>
    </section>
    <!-- section time's up -->
    <section class="time-up">
        <div class="time-up-text">
            <p>Czas minął!</p>
        </div>
        <div class="time-up-button">
            <button>Następne słowo</button>
        </div>
    </section>
    <footer>
        <p>Tabu.fun &copy; 2022<br>Made with ♥ by <a href="https://pasierb.ski" rel="noopener" target="_blank">M. Pasierbski</a></p>
    </footer>
    <script src="app.js" async defer></script>
</body>
</html>