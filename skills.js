const openDialogBtn = document.getElementById('openDialog');
const skillDialog = document.getElementById('skillDialog');
const closeDialogBtn = document.getElementById('closeDialog');
const cancelBtn = document.getElementById('cancel');
const skillForm = document.getElementById('skillForm');

function openDialog() {
  skillDialog.style.display = 'flex';
}

function closeDialog() {
  skillDialog.style.display = 'none';
  skillForm.reset();
}

openDialogBtn.addEventListener('click', openDialog);
closeDialogBtn.addEventListener('click', closeDialog);
cancelBtn.addEventListener('click', closeDialog);

window.addEventListener('click', (e) => {
  if (e.target === skillDialog) {
    closeDialog();
  }
});

skillForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const domain = document.getElementById('domain').value.trim();
  const skills = document.querySelectorAll('.skill');
  const proficiencies = document.querySelectorAll('.proficiency');

  let validEntry = false;

  for (let i = 0; i < skills.length; i++) {
    if (skills[i].value.trim() !== '' && proficiencies[i].value.trim() !== '') {
      validEntry = true;
      break;
    }
  }

  if (!validEntry) {
    alert('Please enter at least one skill with its proficiency.');
    return;
  }

  const skillData = {
    domain,
    skills: []
  };

  skills.forEach((skill, index) => {
    const skillName = skill.value.trim();
    const proficiencyValue = proficiencies[index].value.trim();

    if (skillName !== '' && proficiencyValue !== '') {
      skillData.skills.push({
        skill: skillName,
        proficiency: proficiencyValue
      });
    }
  });

  console.log('Submitted Skill Data:', skillData);

  closeDialog();
  alert('Skills added successfully!');
});
