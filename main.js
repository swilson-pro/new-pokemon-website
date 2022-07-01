//const pokemon = ['charmander', 'bulbasaur', 'squirtle'];

// const pokemonIDs = ['002', '002', '003'];

const pokemon = [
    {name: 'Bulbasaur', id: '001'},
    {name: 'Charmander', id: '004'},
    {name: 'Squirtle', id: '007'}
]


const userRoster = []

const containerDiv = document.querySelector('#container')
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')


  
/*
const toNumber (number) => {
    parseInt(number)

}
*/


// the data url is the only url. 003 isn't working. 

newBtn.addEventListener('click', async () => {

    if (userRoster.length >= 6)
{
    return;
}  // if (userRoster.length >= 6) return; // this isn't working. he'll push to git. 
  let num = prompt('ENTER A POKEMON NUMBER')
  console.log('Number entered', num)


  let zeroFilled = num.padStart(3,'0')
  
  // ('000'+num).slice(-3);  // from here: https://stackoverflow.com/questions/1267283/how-can-i-pad-a-value-with-leading-zeros
//   num.padStart(3,'0') >>> this is another way

  let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroFilled}.png` // how to make it read '5' rather than '005'? how about if numdigits is >1, and first digit = 0, to remove first digit, etc? >> see the zeroFilled variable
  let dataUrl = `https://pokeapi.co/api/v2/pokemon/${parseInt(num)}` // parseInt makes it so that 003 is read as 3, so that the API is called correctly.
  let req = await fetch(dataUrl)
  let res = await req.json()
  let name = res.forms[0].name
  console.log(res);
  let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
  let audio = document.createElement('audio')
  let source = document.createElement('source')
  source.setAttribute('src', audioUrl)
  source.setAttribute('type', 'audio/mpeg')
  audio.append(source)
  let h3 = document.createElement('h3')
  h3.innerText = name
  let img = document.createElement('img')
  img.setAttribute('src', imgUrl)
  img.setAttribute('class', 'roster-img')
  let position = document.querySelector(`#pokemon-${userRoster.length + 1}`)
  let deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('type', 'button')
  deleteBtn.textContent = 'X'
  const playAudio = () => {
    audio.play()
  }
  position.addEventListener('click', playAudio)


  position.append(img, h3, audio, deleteBtn)
  userRoster.push(num)


  
  deleteBtn.addEventListener('click', () => {
    img.remove()
    h3.remove()
    audio.remove()
    deleteBtn.remove()

    position.removeEventListener('click', playAudio)

  })

  


})


//test comment

pokemon.map((element, index) => {
    console.log(element)
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div') // adding a div to house the img element
    let h3 = document.createElement('h3')
    h3.innerText = element.name    
    div.setAttribute('class', 'pokemon-card') // setting the class of the div
    let img = document.createElement('img') // creating the img element itself
    let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`
    let audio = document.createElement('audio') // creating the audio element
    let source = document.createElement('source') // creating the source element
    source.setAttribute('src', audioUrl) // setting the src attribute of the source element to = the audiourl
    source.setAttribute('type', 'audio/mpeg') // setting the type attribute of the source element 
    audio.append(source) // appending the source element to the audio element
    div.addEventListener('click', () => {
      console.log('audio', audioUrl)
      audio.play()
    })
    img.src = imgUrl
    div.append(img, h3, audio) // append the img, h3, and audio elements to the div
    containerDiv.append(div)
  })
  




/*
pokemonIDs.map((id) => {
    console.log(id)
    console.log(index)

    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log('img url', imgUrl)
    let img = document.createElement(`img`)
    img.src = imgUrl
    img.setAttribute('height', '100px')
    img.setAttribute('width', '100px')
    document.body.append(img)
})

*/
