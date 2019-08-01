function prepareSendMail(e) {
  e.preventDefault();
  const data = {
    name: formMail.name.value,
    email: formMail.email.value,
    text: formMail.text.value
  };

  let resultContainer = formMail.querySelector('.status');
  resultContainer.innerHTML = 'Sending...';
  // console.log(data)
  sendJson('/contact', data, 'POST', (data) => {
    console.log(data)
    formMail.reset();
    resultContainer.innerHTML = data.msg;
  });
}


function sendJson (url, data, method, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function (e) {
    let result;
    try {
      result = JSON.parse(xhr.responseText);
      cb(result);
    } catch (e) {
      cb({msg: 'Извините в данных ошибка', status: 'Error'});
    }
  };
  xhr.send(JSON.stringify(data));
}

function sendRequest(e) {
  e.preventDefault();
  const data = {
    name: formMail2.name.value,
    email: formMail2.email.value,
    text: formMail2.text.value
  }
  fetch('/send-request', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
  }).then(function(response) {
    alert('Your request was sent')
  }).catch(function(err) {
    alert(err)
    throw new Error(err)
  })
}

const formMail = document.querySelector('#mail');
const formMail2 = document.querySelector('#mail2');
let deleteForm = document.querySelectorAll('.delete-request')

deleteForm.forEach(element => {
  element.addEventListener('submit', function(e) {
    e.preventDefault()
    let data = {id: element.id.value}
    fetch('/delete-request', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    }).then(function(response) {
      window.location.reload();
    }).catch(function(err) {
      alert(err)
      throw new Error(err)
    })
  })
})
if(formMail) {
  formMail.addEventListener('submit', prepareSendMail);
} else if (formMail2) {
  formMail2.addEventListener('submit', sendRequest) 
}