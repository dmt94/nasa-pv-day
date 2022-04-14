document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
  let choice = document.querySelector('input').value.toLowerCase();
  let newstr = choice.split('/');
  let newDate = `${newstr[2]}-${newstr[0]}-${newstr[1]}`;
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=5LO7AaxRIpfpSdYEt7rlw8h1D8EPzTe1WFLqNixx&date=${newDate}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl;
          document.querySelector('img').style.display = 'block';
          document.querySelector('iframe').style.display = 'none';
          
        } else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url;
          document.querySelector('iframe').style.display = 'block';
          document.querySelector('img').style.display = 'none';
        }
        document.querySelector('.info').textContent = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}