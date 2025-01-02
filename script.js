var questions = [
    "請用一個詞彙來形容你最真實的心望",
    "為實現這個願望不惜一切，你願意嗎？",
    "你相信自己值得擁有實現願望的能力嗎？",
    "再一次，請以一個詞彙形容你心底最真實的願望。"
  ];
  var currentQuestion = 0;
  var answers = [];
  var backgroundMusic = document.getElementById('background-music');
  var spotifyPlayer = document.getElementById('spotify-player');
  var magicLink = document.getElementById('magic-link');
  var playMusicButton = document.getElementById('play-music-button');
  var header = document.querySelector('h1');
  var questionContainer = document.getElementById('question-container');
  var nextButton = document.getElementById('next-button');

playMusicButton.addEventListener('click', function() {
  backgroundMusic.play().catch(function(error) {
    console.log('背景音樂播放失敗：', error);
  });
  playMusicButton.style.display = 'none'; // 隱藏播放按鈕
});
  
  function nextQuestion() {
    if (currentQuestion < questions.length) {
      var question = questions[currentQuestion];
      document.getElementById('question-container').innerHTML = '<p>' + question + '</p><input type="text" id="answer">';
      currentQuestion++;
    } else {
      var wish = answers.join(' ');
      var magic = assignMagic(wish);
      document.getElementById('question-container').innerHTML = '';
      document.getElementById('result').innerHTML = '<h1> 覺醒！</h1>';
       // 隱藏 h1, question-container 和 next button
      header.style.display = 'none';
      questionContainer.style.display = 'none';
      nextButton.style.display = 'none';
      // 顯示你所覺醒之魔力
      document.getElementById('magic-description').innerText = magic;
      document.getElementById('magic-card').classList.remove('hidden');
      // 停止播放背景音樂 
      pauseMusic(); 
      // 顯示Spotify播放器 
      spotifyPlayer.classList.remove('hidden');
      // 確保畫面不會變得大於視窗
      document.body.style.overflow = 'hidden';
    }
  }
  
  function recordAnswer() {
    var answer = document.getElementById('answer').value;
    answers.push(answer);
  }
  
  document.getElementById('next-button').addEventListener('click', function() {
    recordAnswer();
    nextQuestion();
  });
  
  function assignMagic(wish) {
    if (/保護|捨己救人|捨身成人|無懼|果斷|決心|堅決|不怕犧牲|家庭|朋友|愛|影子/.test(wish)) {
      return "Shadow - 轉移他人的魔力為己用";
    } else if (/成就|成功|技能|速度|準時|超越|心急|反應|敏捷/.test(wish)) {
      return "Lightning Runner - 擁有超高速的反應";
    } else if (/自由|時間|行動|快|方便|移動|瞬間轉移|無視空間|無視地域|嫌慢/.test(wish)) {
      return "Jumper - 瞬間轉移";
    } else if (/認同|喜愛|地位|智慧|教育|傳播|信念|目標為本|機會主義|專制|教化無知|獨裁|假民主|絕對服從|宏觀/.test(wish)) {
      return "Commandeer - 通過暗示控制他人";
    } else if (/探索|冒險|知識|大愛|博愛|甘願犧牲|專一|長情|專情|一生愛一人/.test(wish)) {
      return "Fortuneteller - 遙示未來，言靈無法改變的預言";
    } else if (/偉大|守護|護衛|保衛|英雄|寧死不屈|超級英雄|英雄主義|堅定|長壽/.test(wish)) {
      return "Immortal - 不死不朽";
    } else {
      return "無法覺醒！";
    }
  }
  
  // 控制音樂播放
  function playMusic() {
    backgroundMusic.play();
  }
  
  function pauseMusic() {
    backgroundMusic.pause();
  }
  
  nextQuestion();
