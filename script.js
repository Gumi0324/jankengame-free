function janken(playerChoice) {
  const choices = ['グー', 'チョキ', 'パー'];
  const emojis = {'グー': '👊', 'チョキ': '✌️', 'パー': '🖐️'};
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = determineWinner(playerChoice, emojis[computerChoice]);
  document.getElementById('result').innerHTML = `あなた: ${playerChoice}<br>コンピュータ: ${emojis[computerChoice]}<br>${result}`;
}

function determineWinner(player, computer) {
  if (player === computer) {
    return '引き分けです！';
  } else if ((player === '👊' && computer === '✌️') ||
             (player === '✌️' && computer === '🖐️') ||
             (player === '🖐️' && computer === '👊')) {
    return 'あなたの勝ちです！';
  } else {
    return 'あなたの負けです。';
  }
}
