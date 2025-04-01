document.getElementById('diaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const diaryEntry = document.getElementById('diaryEntry').value;
    if (diaryEntry) {
        addDiaryEntry(diaryEntry);
        document.getElementById('diaryEntry').value = '';
    }
});

function addDiaryEntry(entry) {
    const diaryList = document.getElementById('diaryList');
    const li = document.createElement('li');
    li.textContent = entry;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Dzēst';
    deleteButton.onclick = function() {
        diaryList.removeChild(li);
    };

    li.appendChild(deleteButton);
    diaryList.appendChild(li);
}