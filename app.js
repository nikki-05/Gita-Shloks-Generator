async function generateRandomShlok() {
    try {
        const response = await fetch('./shloks.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const shloks = await response.json();
        console.log('Shloks fetched successfully:', shloks);

        const randomIndex = Math.floor(Math.random() * shloks.length);
        const shlok = shloks[randomIndex];
        console.log('Random Shlok selected:', shlok);

        document.getElementById('sanskrit').textContent = shlok.sanskrit;
        document.getElementById('transliteration').textContent = shlok.transliteration;
        document.getElementById('translation').textContent = shlok.translation;
        document.getElementById('explanation').textContent = shlok.explanation;

        document.getElementById('shlok-container').style.display = 'block';
    } catch (error) {
        console.error('Error fetching shlok data:', error);
    }
}

document.getElementById('generate-btn').addEventListener('click', generateRandomShlok);
