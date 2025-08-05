const char = createSorcerer('Bonieky');
const monster = createBigMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);