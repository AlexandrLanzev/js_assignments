function text() {
    alert ('Смогу ли я?')
}
// text();
let log = [];
let maxLife = prompt();
console.log(maxLife);
if (isNaN(maxLife) || maxLife <= 0) {
    maxLife = 100;
}
adjustHealthBars(maxLife)


let damage = 10
let strongDamage = 25
let healValue = 30
let bonusLife = 1
attackBtn.addEventListener('click', kick);
strongAttackBtn.addEventListener('click', superKick);
healBtn.addEventListener('click', heal);


function kick() {
    let applyMonsterDamageHP = applyMonsterDamage(damage);
    let applyPlayerDamageHP = applyPlayerDamage(20);
    checkHeal();
    resultWin();
    resultLost();
    resultDraw();

    log.push(['Простая атака', 'Нанесли урон - ' + applyMonsterDamageHP, 'Получили урон - ' + applyPlayerDamageHP])
} 

function superKick() {
    let applyMonsterDamageHP = applyMonsterDamage(strongDamage);
    let applyPlayerDamageHP = applyPlayerDamage(damage);
    checkHeal();
    resultWin();
    resultLost();
    resultDraw();
    log.push(['Сильная атака', 'Нанесли урон - ' + applyMonsterDamageHP, 'Получили урон - ' + applyPlayerDamageHP])
}

function heal() {
    increasePlayerHealth(healValue);
    let applyPlayerDamageHP = applyPlayerDamage(damage);
    checkHeal();
    resultWin();
    resultLost();
    resultDraw();
    log.push(['Полечились', 'Восстановили здоровье - ' + healValue, 'Получили урон - ' + applyPlayerDamageHP])
}

function checkHeal() {
    if (playerHealthBar.value <= 0 && bonusLife == 1) {
        removeBonusLife(); 
        bonusLife = 0;
        setPlayerHealth(maxLife);
    }
       
}
function resultWin() {
    if ( monsterHealthBar.value <= 0) {
        alert ('You win')
        resetGame(maxLife);
    }
}

function resultLost() {
    if (playerHealthBar.value <= 0) {
        alert ('You lose')
        resetGame(maxLife);
    }
}
function resultDraw() {
    if (playerHealthBar.value <= 0 && monsterHealthBar.value <= 0) {
        alert ('Draw')
        resetGame(maxLife);
    }
}


logBtn.addEventListener('click', logGame);

function logGame() {
    console.log(log);
}