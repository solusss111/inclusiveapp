// ========== 1-СЫНЫП ТАПСЫРМАЛАРЫ ==========

// Глобальные переменные для 1-сынып
let currentFrequency = '';
let currentWildAnimal = '';
let currentFamiliarWord = '';

// ТАПСЫРМА 1: Дыбыс жиілігі
function checkFrequency(choice) {
  const feedback = document.getElementById('g1t1Feedback');
  if (!currentFrequency) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const freqNames = {
    'high': 'Жоғары',
    'mid': 'Орташа',
    'low': 'Төмен'
  };

  if (choice === currentFrequency) {
    feedback.innerHTML = "Дұрыс! Жиілік: " + freqNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentFrequency = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 2: Жабайы жануарлар дауысы
function playRandomWildAnimal() {
  const animals = ['lion', 'wolf', 'bear', 'elephant'];
  const chosen = animals[Math.floor(Math.random() * animals.length)];
  currentWildAnimal = chosen;

  const audio = document.getElementById(chosen + 'Audio');
  if (audio) {
    limitAudioDurationG234(audio);
  } else {
    alert("Аудио файл табылмады! sounds/wild_animals/" + chosen + ".mp3");
  }
}

function checkWildAnimal(choice) {
  const feedback = document.getElementById('g1t2Feedback');
  if (!currentWildAnimal) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const animalNames = {
    'lion': 'Арыстан',
    'wolf': 'Қасқыр',
    'bear': 'Аю',
    'elephant': 'Піл'
  };

  if (choice === currentWildAnimal) {
    feedback.innerHTML = "Дұрыс! Бұл: " + animalNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentWildAnimal = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 3: Таныс сөздер мен сөз тіркестері
function playRandomFamiliarWord() {
  const words = ['hello', 'goodbye', 'thankyou', 'goodmorning'];
  const chosen = words[Math.floor(Math.random() * words.length)];
  currentFamiliarWord = chosen;

  const audioMap = {
    'hello': 'word1Audio',
    'goodbye': 'word2Audio',
    'thankyou': 'word3Audio',
    'goodmorning': 'phrase1Audio'
  };

  const audio = document.getElementById(audioMap[chosen]);
  if (audio) {
    limitAudioDurationG234(audio);
  } else {
    alert("Аудио файл табылмады! sounds/familiar_words/" + chosen + ".mp3");
  }
}

function checkFamiliarWord(choice) {
  const feedback = document.getElementById('g1t3Feedback');
  if (!currentFamiliarWord) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const wordNames = {
    'hello': 'Сәлеметсіз бе',
    'goodbye': 'Сау болыңыз',
    'thankyou': 'Рахмет',
    'goodmorning': 'Қайырлы таң'
  };

  if (choice === currentFamiliarWord) {
    feedback.innerHTML = "Дұрыс! Бұл: " + wordNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentFamiliarWord = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ========== 2-СЫНЫП ТАПСЫРМАЛАРЫ ==========

// ========== ДЫБЫС ҰЗАҚТЫҒЫН ШЕКТЕУ ==========
const MAX_AUDIO_DURATION_G234 = 3; // 3 секунд

function limitAudioDurationG234(audioElement) {
  if (!audioElement) return;

  // Ограничиваем воспроизведение до 3 секунд
  const stopAudioAfterLimit = () => {
    setTimeout(() => {
      if (!audioElement.paused && audioElement.currentTime > 0) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    }, MAX_AUDIO_DURATION_G234 * 1000);
  };

  audioElement.play().catch(e => { });
  stopAudioAfterLimit();
}

// Глобальные переменные для 2-сынып
let currentVehicle = '';
let currentSyllableWord = '';
let currentSyllableCount = 0;
let currentLetter = '';
let currentMathAnswer = '';
let currentSoundDuration = '';
let currentSoundIntensity = '';
let currentMusicalTale = '';
let currentTechnicalNoise = '';

// ТАПСЫРМА 1: Көліктер дыбысы
function checkVehicle(choice) {
  const feedback = document.getElementById('g2t1Feedback');
  if (!currentVehicle) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  if (choice === currentVehicle) {
    feedback.innerHTML = "Дұрыс! Бұл - " + choice;
    feedback.className = "feedback success";
    showReward();
    currentVehicle = ''; // Сброс
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 2: Буындар
function checkSyllables(count) {
  const feedback = document.getElementById('g2t2Feedback');
  if (!currentSyllableCount) {
    feedback.innerHTML = "Алдымен сөзді тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  if (count === currentSyllableCount) {
    feedback.innerHTML = "Дұрыс! " + count + " буын!";
    feedback.className = "feedback success";
    showReward();
    currentSyllableCount = 0;
  } else {
    feedback.innerHTML = "Қате! Буын санын дұрыс санаңыз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 3: С-Ш, З-Ж айыру
function checkLetter(letter) {
  const feedback = document.getElementById('g2t3Feedback');
  if (!currentLetter) {
    feedback.innerHTML = "Алдымен сөзді тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  if (letter === currentLetter) {
    feedback.innerHTML = "Дұрыс! Дыбыс: " + letter;
    feedback.className = "feedback success";
    showReward();
    currentLetter = '';
  } else {
    feedback.innerHTML = "Қате! Бұл басқа дыбыс.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 4: Математика тілі
function checkMath(choice) {
  const feedback = document.getElementById('g2t4Feedback');
  if (!currentMathAnswer) {
    feedback.innerHTML = "Алдымен терминді тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const mathNames = {
    'plus': 'Қосу',
    'minus': 'Азайту',
    'more': 'Артық',
    'less': 'Кем'
  };

  if (choice === currentMathAnswer) {
    feedback.innerHTML = "Дұрыс! Бұл: " + mathNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentMathAnswer = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 5: Дыбыс сипаты (ұзақтық және қаттылық)
function checkSoundProperty(choice, propertyType) {
  const feedback = document.getElementById('g2t5Feedback');

  if (propertyType === 'duration') {
    if (!currentSoundDuration) {
      feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
      feedback.className = "feedback";
      return;
    }

    const durationNames = {
      'long': 'Ұзақ',
      'short': 'Қысқа'
    };

    if (choice === currentSoundDuration) {
      feedback.innerHTML = "Дұрыс! Ұзақтығы: " + durationNames[choice];
      feedback.className = "feedback success";
      showReward();
      currentSoundDuration = '';
      currentSoundIntensity = '';
    } else {
      feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
      feedback.className = "feedback error";
      playError();
    }
  } else if (propertyType === 'intensity') {
    if (!currentSoundIntensity) {
      feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
      feedback.className = "feedback";
      return;
    }

    const intensityNames = {
      'loud': 'Қатты',
      'quiet': 'Ақырын',
      'calm': 'Тыныш'
    };

    if (choice === currentSoundIntensity) {
      feedback.innerHTML = "Дұрыс! Қаттылығы: " + intensityNames[choice];
      feedback.className = "feedback success";
      showReward();
      currentSoundDuration = '';
      currentSoundIntensity = '';
    } else {
      feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
      feedback.className = "feedback error";
      playError();
    }
  }
}

// ТАПСЫРМА 6: Музыкалық ертегілер
function playRandomMusicalTale() {
  const tales = ['redridinghood', 'pinocchio', 'threebears', 'snowwhite'];
  const chosen = tales[Math.floor(Math.random() * tales.length)];
  currentMusicalTale = chosen;

  const audioMap = {
    'redridinghood': 'redRidingHoodAudio',
    'pinocchio': 'pinocchioAudio',
    'threebears': 'threeBearsAudio',
    'snowwhite': 'snowWhiteAudio'
  };

  const audio = document.getElementById(audioMap[chosen]);
  if (audio) {
    limitAudioDurationG234(audio);
  } else {
    alert("Аудио файл табылмады! sounds/musical_tales/" + chosen + ".mp3");
  }
}

function checkMusicalTale(choice) {
  const feedback = document.getElementById('g2t6Feedback');
  if (!currentMusicalTale) {
    feedback.innerHTML = "Алдымен ертегіні тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const taleNames = {
    'redridinghood': 'Қызыл телпек',
    'pinocchio': 'Буратино',
    'threebears': 'Үш аю',
    'snowwhite': 'Ақшақар'
  };

  if (choice === currentMusicalTale) {
    feedback.innerHTML = "Дұрыс! Бұл: " + taleNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentMusicalTale = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 7: Техникалық дыбыстар
function playRandomTechnicalNoise() {
  const noises = ['rifle', 'machinegun', 'cannon'];
  const chosen = noises[Math.floor(Math.random() * noises.length)];
  currentTechnicalNoise = chosen;

  const audioMap = {
    'rifle': 'rifleAudio',
    'machinegun': 'machineGunAudio',
    'cannon': 'cannonAudio'
  };

  const audio = document.getElementById(audioMap[chosen]);
  if (audio) {
    limitAudioDurationG234(audio);
  } else {
    alert("Аудио файл табылмады! sounds/technical_noises/" + chosen + ".mp3");
  }
}

function checkTechnicalNoise(choice) {
  const feedback = document.getElementById('g2t7Feedback');
  if (!currentTechnicalNoise) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const noiseNames = {
    'rifle': 'Мылтық атысы',
    'machinegun': 'Пулемет',
    'cannon': 'Зеңбірек'
  };

  if (choice === currentTechnicalNoise) {
    feedback.innerHTML = "Дұрыс! Бұл: " + noiseNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentTechnicalNoise = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ========== 3-СЫНЫП ТАПСЫРМАЛАРЫ ==========

// Глобальные переменные для 3-сынып
let currentMusicTempo = '';
let currentIntonation = '';
let currentStress = 0;
let currentAppliance = '';
let currentWordType = '';
let currentNationalSong = '';

// ТАПСЫРМА 1: Музыкалық ырғақ
function checkMusicTempo(tempo) {
  const feedback = document.getElementById('g3t1Feedback');
  if (!currentMusicTempo) {
    feedback.innerHTML = "Алдымен музыканы тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const tempoNames = {
    'fast': 'Жылдам',
    'medium': 'Орташа',
    'slow': 'Баяу'
  };

  if (tempo === currentMusicTempo) {
    feedback.innerHTML = "Дұрыс! Қарқын: " + tempoNames[tempo];
    feedback.className = "feedback success";
    showReward();
    currentMusicTempo = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 2: Интонация
function checkIntonation(type) {
  const feedback = document.getElementById('g3t2Feedback');
  if (!currentIntonation) {
    feedback.innerHTML = "Алдымен сөйлемді тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const typeNames = {
    'question': 'Сұрақ',
    'statement': 'Хабарлау',
    'exclamation': 'Леп'
  };

  if (type === currentIntonation) {
    feedback.innerHTML = "Дұрыс! Интонация: " + typeNames[type];
    feedback.className = "feedback success";
    showReward();
    currentIntonation = '';
  } else {
    feedback.innerHTML = "Қате! Интонацияны дұрыс анықтаңыз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 3: Екпін
function checkStress(syllable) {
  const feedback = document.getElementById('g3t3Feedback');
  if (!currentStress) {
    feedback.innerHTML = "Алдымен сөзді тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  if (syllable === currentStress) {
    feedback.innerHTML = "Дұрыс! Екпін " + syllable + "-ші буында!";
    feedback.className = "feedback success";
    showReward();
    currentStress = 0;
  } else {
    feedback.innerHTML = "Қате! Екпін басқа буында.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 4: Тұрмыстық техника
function playRandomAppliance() {
  const apps = ['fridge', 'vacuum', 'washing_machine', 'hair_dryer'];
  const chosen = apps[Math.floor(Math.random() * apps.length)];
  currentAppliance = chosen;

  const audioMap = {
    'fridge': 'fridgeAudio',
    'vacuum': 'vacuumAudio',
    'washing_machine': 'washingMachineAudio',
    'hair_dryer': 'hairDryerAudio'
  };

  const audio = document.getElementById(audioMap[chosen]);
  if (audio) {
    limitAudioDurationG234(audio);
  } else {
    alert("Аудио файл табылмады! sounds/appliances/" + chosen + ".mp3");
  }
}

function checkAppliance(choice) {
  const feedback = document.getElementById('g3t4Feedback');
  if (!currentAppliance) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  // Для соответствия имен из images-grid
  if (choice === 'washing_machine' && currentAppliance === 'washing_machine') choice = 'washing_machine';
  else if (choice === 'hair_dryer' && currentAppliance === 'hair_dryer') choice = 'hair_dryer';

  const appNames = {
    'fridge': 'Тоңазытқыш',
    'vacuum': 'Шаңсорғыш',
    'washing_machine': 'Киім жуғыш',
    'hair_dryer': 'Фен'
  };

  if (choice === currentAppliance) {
    feedback.innerHTML = "Дұрыс! Бұл: " + appNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentAppliance = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 5: Сөздерді тану
function checkWordType(type) {
  const feedback = document.getElementById('g3t5Feedback');
  if (!currentWordType) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const typeNames = {
    'familiar': 'Таныс сөз',
    'question': 'Сұрақ',
    'task': 'Тапсырма'
  };

  if (type === currentWordType) {
    feedback.innerHTML = "Дұрыс! Бұл: " + typeNames[type];
    feedback.className = "feedback success";
    showReward();
    currentWordType = '';
  } else {
    feedback.innerHTML = "Қате! Дұрыс анықтаңыз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 6: Ұлттық әндер
function playRandomNationalSong() {
  const songs = ['kazakh', 'russian', 'english'];
  const chosen = songs[Math.floor(Math.random() * songs.length)];
  currentNationalSong = chosen;

  const audioMap = {
    'kazakh': 'kazakhSongAudio',
    'russian': 'russianSongAudio',
    'english': 'englishSongAudio'
  };

  const audio = document.getElementById(audioMap[chosen]);
  if (audio) {
    limitAudioDurationG234(audio);
  } else {
    alert("Аудио файл табылмады! sounds/national_songs/" + chosen + ".mp3");
  }
}

function checkNationalSong(choice) {
  const feedback = document.getElementById('g3t6Feedback');
  if (!currentNationalSong) {
    feedback.innerHTML = "Алдымен әнді тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const songNames = {
    'kazakh': 'Қазақ әні',
    'russian': 'Орыс әні',
    'english': 'Ағылшын әні'
  };

  if (choice === currentNationalSong) {
    feedback.innerHTML = "Дұрыс! Бұл: " + songNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentNationalSong = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ========== 4-СЫНЫП ТАПСЫРМАЛАРЫ ==========

// Глобальные переменные для 4-сынып
let currentStoryAnswer = 0;
let currentDialogSpeaker = '';
let currentTechItem = '';
let isReading = false;
let currentComplexRhythm = 0;
let currentDirection = '';
let currentHumanSoundG4 = '';

// ТАПСЫРМА 1: Әңгімелерді тыңдау
function checkStoryAnswer(answer) {
  const feedback = document.getElementById('g4t1Feedback');
  if (!currentStoryAnswer) {
    feedback.innerHTML = "Алдымен әңгімені тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  // Для простоты, допустим правильный ответ всегда 1 для истории 1, 2 для истории 2...
  if (answer === currentStoryAnswer) {
    feedback.innerHTML = "Дұрыс жауап! Керемет!";
    feedback.className = "feedback success";
    showReward();
    currentStoryAnswer = 0;
  } else {
    feedback.innerHTML = "Қате жауап, қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 2: Диалог
function checkDialog(speaker) {
  const feedback = document.getElementById('g4t2Feedback');
  if (!currentDialogSpeaker) {
    feedback.innerHTML = "Алдымен диалогты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const speakerNames = {
    'child': 'Бала',
    'adult': 'Ересек',
    'both': 'Екеуі де'
  };

  if (speaker === currentDialogSpeaker) {
    feedback.innerHTML = "Дұрыс! Сөйлеп тұрған: " + speakerNames[speaker];
    feedback.className = "feedback success";
    showReward();
    currentDialogSpeaker = '';
  } else {
    feedback.innerHTML = "Қате! Дұрыстап тыңдаңыз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 3: Мәтін оқу
async function startReading() {
  const feedback = document.getElementById('g4t3Feedback');
  const progressBar = document.getElementById('readingProgress');
  const readBtn = document.getElementById('readBtn');
  const stopBtn = document.getElementById('stopReadBtn');

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);
    microphone.connect(analyser);
    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    isReading = true;
    readBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
    feedback.innerHTML = "Оқып жатырсыз... Жақсы!";
    feedback.className = "feedback";

    let progress = 0;

    function analyze() {
      if (!isReading) {
        audioContext.close();
        return;
      }

      requestAnimationFrame(analyze);
      analyser.getByteFrequencyData(dataArray);

      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      let average = sum / bufferLength;

      if (average > 30) {
        progress += 0.5;
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + '%';
        progressBar.innerText = Math.floor(progress) + '%';

        if (progress >= 100) {
          stopReading();
          feedback.innerHTML = "Керемет! Сіз мәтінді жақсы оқыдыңыз!";
          feedback.className = "feedback success";
          showReward();
        }
      }
    }

    analyze();

  } catch (err) {
    console.error(err);
    feedback.innerHTML = "Микрофон қосылмады. Рұқсат беріңіз.";
    feedback.className = "feedback error";
  }
}

function stopReading() {
  isReading = false;
  document.getElementById('readBtn').style.display = 'inline-block';
  document.getElementById('stopReadBtn').style.display = 'none';
}

// ТАПСЫРМА 4: Техника дыбыстары
function checkTech(choice) {
  const feedback = document.getElementById('g4t4Feedback');
  if (!currentTechItem) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const techNames = {
    'tractor': 'Трактор',
    'saw': 'Ара',
    'sewing': 'Тігін машинасы'
  };

  if (choice === currentTechItem) {
    feedback.innerHTML = "Дұрыс! Бұл: " + techNames[choice];
    feedback.className = "feedback success";
    showReward();
    currentTechItem = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 5: Күрделі ырғақ (4+ соққы)
function checkComplexRhythm(count) {
  const feedback = document.getElementById('g4t5Feedback');
  if (!currentComplexRhythm) {
    feedback.innerHTML = "Алдымен ырғақты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  if (count === currentComplexRhythm) {
    feedback.innerHTML = "Дұрыс! " + count + " соққы!";
    feedback.className = "feedback success";
    showReward();
    currentComplexRhythm = 0;
  } else {
    feedback.innerHTML = "Қате! Санын дұрыс санаңыз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 6: Дыбыс бағыты
function checkDirection(direction) {
  const feedback = document.getElementById('g4t6Feedback');
  if (!currentDirection) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const dirNames = {
    'left': 'Сол жақтан',
    'right': 'Оң жақтан',
    'front': 'Алдынан',
    'back': 'Артынан'
  };

  if (direction === currentDirection) {
    feedback.innerHTML = "Дұрыс! Дыбыс " + dirNames[direction] + " шықты!";
    feedback.className = "feedback success";
    showReward();
    currentDirection = '';
  } else {
    feedback.innerHTML = "Қате! Бағытты дұрыс анықтаңыз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ТАПСЫРМА 7: Адам эмоциясы мен дыбыстары
function playRandomHumanSoundG4() {
  const sounds = ['laugh', 'cry', 'cough', 'sneeze'];
  const chosen = sounds[Math.floor(Math.random() * sounds.length)];
  currentHumanSoundG4 = chosen;

  const audio = new Audio(`sounds/human_complex/${chosen}.mp3`);
  limitAudioDurationG234(audio);

  // Добавляем обработчик ошибок, так как теги audio не создавались в HTML
  audio.addEventListener('error', () => {
    alert(`Аудио файл табылмады! sounds/human_complex/${chosen}.mp3`);
  });
}

function checkHumanSoundG4(type) {
  const feedback = document.getElementById('g4t7Feedback');
  if (!currentHumanSoundG4) {
    feedback.innerHTML = "Алдымен дыбысты тыңдаңыз! 🔊";
    feedback.className = "feedback";
    return;
  }

  const soundNames = {
    'laugh': 'Күлкі',
    'cry': 'Жылау',
    'cough': 'Жөтелу',
    'sneeze': 'Түшкіру'
  };

  if (type === currentHumanSoundG4) {
    feedback.innerHTML = "Дұрыс! Бұл: " + soundNames[type];
    feedback.className = "feedback success";
    showReward();
    currentHumanSoundG4 = '';
  } else {
    feedback.innerHTML = "Қате! Қайта тыңдап көріңіз.";
    feedback.className = "feedback error";
    playError();
  }
}

// ========== ЖАЛПЫ ФУНКЦИЯ - ДЫБЫС ОЙНАТУ ==========
function playSound(type) {
  let audioPath = '';

  // 1-СЫНЫП
  if (type === 'soundFrequency') {
    const frequencies = ['high', 'mid', 'low'];
    const freq = frequencies[Math.floor(Math.random() * frequencies.length)];
    currentFrequency = freq;
    audioPath = `sounds/sound_frequency/${freq}.mp3`;
  }

  // 2-СЫНЫП
  else if (type === 'vehicle') {
    const vehicles = ['car', 'plane', 'train', 'motorcycle'];
    const chosen = vehicles[Math.floor(Math.random() * vehicles.length)];
    currentVehicle = chosen;
    audioPath = `sounds/transport/${chosen}.mp3`;
  }
  else if (type === 'syllable') {
    const counts = [1, 2, 3, 4];
    const count = counts[Math.floor(Math.random() * counts.length)];
    currentSyllableCount = count;
    audioPath = `sounds/syllables/word_${count}.mp3`;
  }
  else if (type === 'letter') {
    const letters = ['s', 'sh', 'z', 'zh'];
    const letterCode = letters[Math.floor(Math.random() * letters.length)];
    const letterMap = { 's': 'С', 'sh': 'Ш', 'z': 'З', 'zh': 'Ж' };
    currentLetter = letterMap[letterCode];
    audioPath = `sounds/letters/word_${letterCode}.mp3`;
  }
  else if (type === 'math') {
    const terms = ['plus', 'minus', 'more', 'less'];
    const term = terms[Math.floor(Math.random() * terms.length)];
    currentMathAnswer = term;
    audioPath = `sounds/math/${term}.mp3`;
  }
  else if (type === 'soundProperty') {
    // Случайный выбор: либо тестируем длительность, либо интенсивность
    const propertyTypes = ['duration', 'intensity'];
    const chosenProperty = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];

    if (chosenProperty === 'duration') {
      const durations = ['long', 'short'];
      const duration = durations[Math.floor(Math.random() * durations.length)];
      currentSoundDuration = duration;
      currentSoundIntensity = ''; // Сброс другого свойства
      audioPath = `sounds/sound_properties/duration_${duration}.mp3`;
    } else {
      const intensities = ['loud', 'quiet', 'calm'];
      const intensity = intensities[Math.floor(Math.random() * intensities.length)];
      currentSoundIntensity = intensity;
      currentSoundDuration = ''; // Сброс другого свойства
      audioPath = `sounds/sound_properties/intensity_${intensity}.mp3`;
    }
  }

  // 3-СЫНЫП
  else if (type === 'music') {
    const tempos = ['fast', 'medium', 'slow'];
    const tempo = tempos[Math.floor(Math.random() * tempos.length)];
    currentMusicTempo = tempo;
    audioPath = `sounds/music_tempo/${tempo}.mp3`;
  }
  else if (type === 'intonation') {
    const types = ['question', 'statement', 'exclamation'];
    const intType = types[Math.floor(Math.random() * types.length)];
    currentIntonation = intType;
    audioPath = `sounds/intonation/${intType}.mp3`;
  }
  else if (type === 'stress') {
    const syllables = [1, 2, 3];
    const syl = syllables[Math.floor(Math.random() * syllables.length)];
    currentStress = syl;
    audioPath = `sounds/stress/stress_${syl}.mp3`;
  }
  else if (type === 'wordType') {
    const types = ['familiar', 'question', 'task'];
    const wordType = types[Math.floor(Math.random() * types.length)];
    currentWordType = wordType;
    audioPath = `sounds/word_types/${wordType}.mp3`;
  }

  // 4-СЫНЫП
  else if (type === 'story') {
    const storyNum = Math.floor(Math.random() * 3) + 1;
    currentStoryAnswer = storyNum;
    audioPath = `sounds/stories/story_${storyNum}.mp3`;
    const q = document.getElementById('storyQuestion');
    if (q) q.innerText = "Әңгіме #" + storyNum + " тыңдалуда...";
  }
  else if (type === 'dialog') {
    const speakers = ['child', 'adult', 'both'];
    const speaker = speakers[Math.floor(Math.random() * speakers.length)];
    currentDialogSpeaker = speaker;
    audioPath = `sounds/dialog/${speaker}.mp3`;
  }
  else if (type === 'tech') {
    const items = ['tractor', 'saw', 'sewing'];
    const item = items[Math.floor(Math.random() * items.length)];
    currentTechItem = item;
    audioPath = `sounds/technical/${item === 'sewing' ? 'sewing_machine' : item}.mp3`;
  }
  else if (type === 'complexRhythm') {
    const counts = [4, 5, 6];
    const count = counts[Math.floor(Math.random() * counts.length)];
    currentComplexRhythm = count;
    audioPath = `sounds/complex_rhythms/rhythm_${count}.mp3`;
  }
  else if (type === 'direction') {
    const directions = ['left', 'right', 'front', 'back'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    currentDirection = direction;
    audioPath = `sounds/directions/${direction}.mp3`;
  }

  if (audioPath) {
    const audio = new Audio(audioPath);
    console.log('Playing:', audioPath);

    // Добавляем обработчик ошибок
    audio.addEventListener('error', () => {
      console.error("Audio not found:", audioPath);
      alert("Аудио файл табылмады: " + audioPath + "\nФайлдарды 'sounds' папкасына жүктеңіз!");
    });

    // Используем функцию ограничения длительности
    limitAudioDurationG234(audio);
  }
}
