const data = [{
  serialid: 1,
  firstname: 'Andrea',
  lastname: 'Ross'
}, {
  serialid: 2,
  firstname: 'Penelope',
  lastname: 'Mills'
}, {
  serialid: 3,
  firstname: 'Sarah',
  lastname: 'Grant'
}, {
  serialid: 4,
  firstname: 'Vanessa',
  lastname: 'Roberts'
}, {
  serialid: 5,
  firstname: 'Oliver',
  lastname: 'Alsop'
}, {
  serialid: 6,
  firstname: 'Jennifer',
  lastname: 'Forsyth'
}, {
  serialid: 7,
  firstname: 'Michelle',
  lastname: 'King'
}, {
  serialid: 8,
  firstname: 'Steven',
  lastname: 'Kelly'
}, {
  serialid: 9,
  firstname: 'Julian',
  lastname: 'Ferguson'
}, {
  serialid: 10,
  firstname: 'Chloe',
  lastname: 'Ince'
}]

const table = document.querySelector('.table'),
  serialNum = document.querySelector('.serial-num'),
  firstName = document.querySelector('.f-name'),
  lastName = document.querySelector('.l-name');

// function to create table data
const buildTable = (data) => {
  data.forEach((obj) => {
    const tr = document.createElement('tr');
    tr.classList.add('user-row');
    tr.innerHTML = ` <td class="user-id">${obj.serialid}</td>
    <td class="user-f-name">${obj.firstname}</td>
    <td class="user-l-name">${obj.lastname}</td>`;
    table.appendChild(tr);
  });
}
// initial table created
buildTable(data);
// function to remove table row before next sorting
const rowRemove = () => {
  let userRow = document.querySelectorAll('.user-row');
  userRow.forEach(element => {
    element.remove();
  });
}
// event for sort data by serial number
serialNum.addEventListener('click', () => {
  console.log('hi');
  serialNum.classList.toggle('active');
  const serialData = data.sort(compareData('serialid', serialNum));
  rowRemove();
  buildTable(serialData);
});
// sort function for first name and last name 
const compareData = (key, eventParam) => {
  return sortData = (a, b) => {
    if (key === 'serialid') {
      if (eventParam.classList.contains('active')) {
        return b[key] - a[key];
      } else {
        return a[key] - b[key];
      }
    } else {
      const nameA = a[key].toUpperCase();
      const nameB = b[key].toUpperCase();
      if (eventParam.classList.contains('active')) {
        return nameA == nameB ? 0 : nameA > nameB ? 1 : -1;
      } else {
        return nameA == nameB ? 0 : nameA > nameB ? -1 : 1;
      }
    }
  };
};
// event for sort data by first name
firstName.addEventListener('click', () => {
  firstName.classList.toggle('active');
  const firstNameData = data.sort(compareData('firstname', firstName));
  rowRemove();
  buildTable(firstNameData);
});
// event for sort data by last name
lastName.addEventListener('click', () => {
  lastName.classList.toggle('active');
  const lastNameData = data.sort(compareData('lastname', lastName));
  rowRemove();
  buildTable(lastNameData);
});











































