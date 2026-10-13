function setgame() {
    const titleScreen = document.getElementById("title-screen");
    const gameScreen = document.getElementById("game-screen");
    const endingScreen = document.getElementById("ending-screen");
    const startButton = document.getElementById("start-button");
    const sunlightButton = document.getElementById("button");
    const nextDayButton = document.getElementById("next-day-button");
    const meterFill = document.getElementById("meter-fill");
    const meterTrack = document.getElementById("meter-track");
    const dayLabel = document.getElementById("date");
    const shroomImage = document.getElementById("shroom-character");
    const flowerOverlay = document.getElementById("flower-overlay");
    const dialogueSpeaker = document.getElementById("dialogue-speaker");
    const dialogueText = document.getElementById("dialogue-text");
    const dialogueBubble = document.getElementById("dialogue-bubble");
    const characterArea = document.getElementById("character-area");
    const nameEntry = document.getElementById("name-entry");
    const playerNameInput = document.getElementById("player-name");

    if (!titleScreen || !gameScreen || !endingScreen || !startButton || !sunlightButton || !nextDayButton || !meterFill || !meterTrack || !dayLabel || !shroomImage || !flowerOverlay || !dialogueSpeaker || !dialogueText || !dialogueBubble || !characterArea || !nameEntry || !playerNameInput) return;

    const days = [
        {
            day: 1,
            images: ["a1.png", "a2.png"],
            beforeSunlight: [
                { speaker: "You", text: "...", style: "player" ,revealAgari: true },
                { speaker: "???", text: "Oh! Ello!", style: "agari"},
                { speaker: "You", text: "Hi?", style: "player" },
                { speaker: "???", text: "Never seen you around before, what's your name?", style: "agari", askName: true,},
                { speaker: "Agari", text: "Hi, {name}! I'm Agari!", style: "agari"},
                { speaker: "You", text: "What do you think about sunlight, Agari?", style: "player"},
                { speaker: "Agari", text: "I don't mind. I'm not obsessed over it like flowers do.", style: "agari", doneconvo: true },
            ],
            afterSunlight: [
                { speaker: "Agari", text: "Oh, that's nice...", style: "agari"},
                { speaker: "You", text: "Goodbye", style: "player" },
                { speaker: "Agari", text: "Bye!", style: "agari", doneconvo: true },
            ],
        },
        {
            day: 2,
            images: ["b1.png", "b2.png"],
            beforeSunlight: [
                { speaker: "You", text: "...", style: "player" },
                { speaker: "Agari", text: "Ah, it's you again!", style: "agari" },
                { speaker: "You", text: "Yup, you like the dark?", style: "player" },
                { speaker: "Agari", text: "I do, it's so peaceful! How are you?", style: "agari"},
                { speaker: "You", text: "I'm good, what about you?", style: "player" },
                { speaker: "Agari", text: "I've been snacking alot, look what I found!", style: "agari"},
                { speaker: "Agari", text: "<gives you a dead plant>", style: "agari"},
                { speaker: "Agari", text: "It's my favourite snack! You like it?", style: "agari"},
                { speaker: "You", text: "Oh uh...thanks.", style: "player"},
                { speaker: "You", text: "I'll give you something in return.", style: "player", doneconvo: true },
            ],
            afterSunlight: [
                { speaker: "Agari", text: "!!!", style: "agari"},
                { speaker: "Agari", text: "-Thanks, again... I feels warm.", style: "agari"},
                { speaker: "You", text: "No problem! I got to go.", style: "player" },
                { speaker: "Agari", text: "A-Alright, See you next time!", style: "agari", doneconvo: true },
            ],
        },
        {
            day: 4,
            images: ["c1.png", "c2.png"],
            beforeSunlight: [
                { speaker: "You", text: "...", style: "player" },
                { speaker: "Agari", text: "{name}! Where have you been?", style: "agari" },
                { speaker: "You", text: "Just wandering around-", style: "player" },
                { speaker: "You", text: "You look...different.", style: "player" },
                { speaker: "Agari", text: "Oh, this? I don't know how it got there.", style: "agari" },
                { speaker: "You", text: "It seems, sad", style: "player" },
                { speaker: "Agari", text: "I supposed...it missed the sunlight.", style: "agari", doneconvo: true },
            ],
            afterSunlight: [
                { speaker: "You", text: "I'm sorry, I was busy lately.", style: "player" },
                { speaker: "Agari", text: "!!!", style: "agari" },
                { speaker: "Agari", text: "You didn't have to", style: "agari" },
                { speaker: "Agari", text: "...Thank you so much...", style: "agari" },
                { speaker: "You", text: "My pleasure, Agari.", style: "player" },
                { speaker: "Agari", text: "I feel, a little fuzzy...", style: "agari", doneconvo: true },
            ],
        },
        {
            day: 7,
            images: ["d1.png", "d2.png"],
            beforeSunlight: [
                { speaker: "You", text: "Hi Agari", style: "player" },
                { speaker: "Agari", text: "Ello {name}, it's been a while...", style: "agari"},
                { speaker: "You", text: "You grew more flowers", style: "player" },
                {speaker: "Agari", text: "I think it's withering away though", style: "agari"},
                { speaker: "You", text: "Oof, I'm so sorry!", style: "player" },
                { speaker: "Agari", text: "It's okay-", style: "agari" },
                { speaker: "you", text: "I'll make up for it.", style: "player" },
                { speaker: "Agari", text: "Wait no-", style: "agari", doneconvo: true },
            ],
            afterSunlight: [
                { speaker: "Agari", text: "...I feel a bit better now.", style: "agari"},
                { speaker: "Agari", text: "Thank you for coming back, will I see you again?", style: "agari"},
                {speaker: "You", text: "Of course! I promise.", style: "player"},
                { speaker: "Agari", text: "Yay, see you next time!", style: "agari", doneconvo: true },
            ],
        },
        {
            day: 10,
            images: ["dead.png"],
            beforeSunlight: [
                { speaker: "You", text: "Agari?", style: "player" },
                { speaker: "Agari", text: "...", style: "agari", doneconvo: true },
            ],
            afterSunlight: [
                { speaker: "Agari", text: "...", style: "agari"},
                { speaker: "You", text: "...", style: "player", doneconvo: true },
            ],
        },
    ];

    const fillDuration = 2500;
    let dayIndex = 0;
    let isHolding = false;
    let progress = 0;
    let holdStartedAt = 0;
    let sunlightTimer;
    let sunlightCompleted = false;
    let conversationStage = "beforeSunlight";
    let conversationIndex = 0;
    let conversationFinished = false;
    let playerName = "";

    const getConversation = () => days[dayIndex][conversationStage];

    const showDialogue = (line) => {
        dialogueSpeaker.textContent = line.speaker;
        dialogueText.textContent = line.text.replace("{name}", playerName);
        dialogueBubble.classList.toggle("player-bubble", line.style === "player");
        dialogueBubble.classList.toggle("agari-bubble", line.style === "agari");
        nameEntry.hidden = !line.askName;
        if (line.revealAgari) characterArea.hidden = false;
        if (line.askName) playerNameInput.focus();
    };

    const updateMeter = (value) => {
        progress = Math.max(0, Math.min(100, value));
        meterFill.style.width = `${progress}%`;
        meterTrack.setAttribute("aria-valuenow", String(Math.round(progress)));
        gameScreen.style.setProperty("--sunlight-intensity", String((progress / 100) * 0.2));

        const flowerProgress = sunlightCompleted ? 100 : progress;
        flowerOverlay.querySelectorAll("img").forEach((flower, index) => {
            flower.style.opacity = flowerProgress >= (index + 1) * 10 ? "0" : "1";
        });
    };

    const completeSunlight = () => {
        if (sunlightCompleted) return;
        sunlightCompleted = true;
        isHolding = false;
        window.clearInterval(sunlightTimer);
        const current = days[dayIndex];
        if (current.images.length > 1) {
            shroomImage.src = `img/${current.images[1]}`;
        }
        conversationStage = "afterSunlight";
        conversationIndex = 0;
        conversationFinished = false;
        sunlightButton.hidden = true;
        sunlightButton.setAttribute("aria-label", "Sunlight gathered");
        showDialogue(getConversation()[conversationIndex]);
    };

    const finishConversation = () => {
        conversationFinished = true;
        if (conversationStage === "beforeSunlight") {
            sunlightButton.hidden = false;
            return;
        }

        if (dayIndex === days.length - 1) {
            gameScreen.hidden = true;
            endingScreen.hidden = false;
            return;
        }

        nextDayButton.hidden = false;
    };

    const updateDay = () => {
        const current = days[dayIndex];
        dayLabel.textContent = `Day ${current.day}`;
        shroomImage.src = `img/${current.images[0]}`;
        flowerOverlay.replaceChildren();
        flowerOverlay.hidden = current.day !== 10;
        if (current.day === 10) {
            for (let flowerNumber = 1; flowerNumber <= 10; flowerNumber += 1) {
                const flower = document.createElement("img");
                flower.src = `img/f${flowerNumber}.png`;
                flower.alt = "";
                flower.style.opacity = "1";
                flowerOverlay.append(flower);
            }
        }

    };

    const startFilling = (event) => {
        if (sunlightCompleted || conversationStage !== "beforeSunlight" || sunlightButton.hidden) return;
        if (event.type === "pointerdown") {
            event.preventDefault();
            try {
                sunlightButton.setPointerCapture(event.pointerId);
            } catch {
                // Synthetic pointer events used by some browser tools have no active pointer to capture.
            }
        } else if (event.key === " " || event.key === "Enter") {
            if (event.repeat) return;
            event.preventDefault();
        } else {
            return;
        }

        if (isHolding) return;
        isHolding = true;
        holdStartedAt = performance.now();
        sunlightTimer = window.setInterval(() => {
            const heldFor = performance.now() - holdStartedAt;
            updateMeter((heldFor / fillDuration) * 100);
            if (heldFor >= fillDuration) completeSunlight();
        }, 40);
    };

    const stopFilling = () => {
        if (isHolding && performance.now() - holdStartedAt >= fillDuration) {
            updateMeter(100);
            completeSunlight();
        }
        isHolding = false;
        window.clearInterval(sunlightTimer);
        updateMeter(0);
    };

    startButton.addEventListener("click", () => {
        titleScreen.hidden = true;
        gameScreen.hidden = false;
    });

    const advanceConversation = () => {
        if (conversationFinished) return;
        const conversation = getConversation();
        const currentLine = conversation[conversationIndex];
        if (currentLine.askName) {
            playerName = playerNameInput.value.trim();
            if (!playerName) {
                playerNameInput.focus();
                return;
            }
        }

        if (currentLine.doneconvo) {
            finishConversation();
            return;
        }

        conversationIndex += 1;
        if (conversationIndex < conversation.length) {
            showDialogue(conversation[conversationIndex]);
            return;
        }

        finishConversation();
    };

    dialogueBubble.addEventListener("click", (event) => {
        if (event.target !== playerNameInput) {
            advanceConversation();
        }
    });
    dialogueBubble.addEventListener("keydown", (event) => {
        if ((event.key === "Enter" || event.key === " ") && event.target !== playerNameInput) {
            event.preventDefault();
            advanceConversation();
        }
    });
    playerNameInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && playerNameInput.value.trim()) advanceConversation();
    });

    nextDayButton.addEventListener("click", () => {
        if (!sunlightCompleted || conversationStage !== "afterSunlight" || dayIndex === days.length - 1) return;

        dayIndex += 1;
        sunlightCompleted = false;
        conversationStage = "beforeSunlight";
        conversationIndex = 0;
        conversationFinished = false;
        nextDayButton.hidden = true;
        sunlightButton.setAttribute("aria-label", "Hold for sunlight");
        sunlightButton.hidden = true;
        updateMeter(0);
        updateDay();
        showDialogue(getConversation()[conversationIndex]);
    });

    sunlightButton.addEventListener("pointerdown", startFilling);
    sunlightButton.addEventListener("pointerup", stopFilling);
    sunlightButton.addEventListener("pointercancel", stopFilling);
    sunlightButton.addEventListener("lostpointercapture", stopFilling);
    sunlightButton.addEventListener("keydown", startFilling);
    sunlightButton.addEventListener("keyup", stopFilling);
    window.addEventListener("pointerup", stopFilling);
    window.addEventListener("pointercancel", stopFilling);
    window.addEventListener("keyup", (event) => {
        if (event.key === " " || event.key === "Enter") stopFilling();
    });
    window.addEventListener("blur", stopFilling);
    nextDayButton.hidden = true;
    sunlightButton.hidden = true;
    updateDay();
    showDialogue(getConversation()[conversationIndex]);
}

document.addEventListener("DOMContentLoaded", setgame);