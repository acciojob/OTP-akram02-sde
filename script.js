
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        code.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value) {
                if (index < codes.length - 1) {
                    // Move focus to the next input
                    codes[index + 1].focus();
                }
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value) {
                if (index > 0) {
                    // Move focus to the previous input
                    codes[index - 1].focus();
                }
            }
        });
    });