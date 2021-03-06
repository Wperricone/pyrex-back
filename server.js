const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Pyrex Back';
const data = {
  patterns: [
  { id: '1', name: 'Gooseberry', tags: ['leaves', 'berries', 'flowers', 'gooseberry'], colors: ['yellow', 'black', 'pink', 'white'], img: 'https://i.ibb.co/yPJKLwC/th-gooseberry.jpg'},

  { id: '2', name: 'Pink Daisy', tags: ['flowers', 'daisy', 'daisies'], colors: ['pink', 'white'], img: 'https://i.ibb.co/yFTMxMP/th-pinkdaisy.jpg'},

  { id: '3', name: 'Snowflake', tags: ['snowflake', 'snowflakes', 'snow', 'winter'], colors: ['turquoise', 'black', 'white'], img: 'https://i.ibb.co/Cw0R9mW/download-1.jpg'},

  { id: '4', name: 'Butterprint', tags: ['farm', 'chicken', 'rooster', 'corn', 'farmers', 'amish', 'dutch'], colors: ['turquoise', 'white', 'yellow', 'pink'], img: 'https://i.ibb.co/tx3kr1j/th-butterprint.jpg'},

  { id: '5', name: 'Autumn Harvest', tags: ['wheat', 'harvest', 'grain'], colors: ['brown', 'tan', 'orange', 'white'], img: 'https://i.ibb.co/ZBLz75b/th-autumnharvest.jpg'},

  { id: '6', name: 'Balloons', tags: ['hot air balloons', 'balloons', 'flying machine'], colors: ['turquoise', 'white'], img: 'https://i.ibb.co/6NJNLMs/download.jpg'},

  { id: '7', name: 'Butterfly Gold', tags: ['flowers', 'butterflies', 'leaves'], colors: ['yellow', 'white', 'gold'], img: 'https://i.ibb.co/nkxVvQr/th-butterflygold1.jpg'},

  { id: '8', name: 'Colonial Mist', tags: ['flowers', 'daisy', 'dandelion'], colors: ['blue', 'navy', 'white'], img: 'https://i.ibb.co/Qk3qKJW/th-colonialmist.jpg'},

  { id: '9', name: 'Daisy', tags: ['daisy', 'flowers', 'sunflowers'], colors: ['yellow', 'orange', 'white', 'gold'], img: 'https://i.ibb.co/8MWKJ9b/th-daisy2.jpg'},

  { id: '10', name: 'Early American', tags: ['americana', 'cat', 'coffee grinder', 'eagle', 'corn'], colors: ['brown', 'tan', 'gold', 'white'], img: 'https://i.ibb.co/qCLgYdy/th-earlyamerican.jpg'},

  { id: '11', name: 'Forest Fancies', tags: ['mushrooms', 'forest', 'grass'], colors: ['brown', 'tan'], img: 'https://i.ibb.co/Lr1H6bd/th-forestfancies.jpg'},

  { id: '12', name: 'Friendship', tags: ['bird', 'flowers'], colors: ['orange', 'yellow', 'red', 'white'], img: 'https://i.ibb.co/Hnh12SX/th-friendship.jpg'},

  { id: '13', name: 'Golden Acorn', tags: ['acorns', 'leaves', 'leaf', 'oak'], colors: ['gold', 'yellow', 'tan'], img: 'https://i.ibb.co/bF340Dv/th-goldacorn.jpg'},

  { id: '14', name: 'Golden Honeysuckle', tags: ['honeysuckle', 'flowers', 'vine'], colors: ['white', 'gold', 'green'], img: 'https://i.ibb.co/DQFgtt4/th-honeysuckle.jpg'},

  { id: '15', name: 'Homestead', tags: ['vine', 'country',  'flowers', 'leaves'], colors: ['blue', 'brown', 'tan'], img: 'https://i.ibb.co/hCSrLH5/th-homestead.jpg'},

  { id: '16', name: 'Horizon Blue', tags: ['flowers', 'lotus'], colors: ['blue', 'white', 'turquoise'], img: 'https://i.ibb.co/bsPSKsN/th-horizonblue2.jpg'},

  { id: '17', name: 'Lucky In Love', tags: ['clover', 'grass', 'hearts'], colors: ['pink', 'green', 'white'], img: 'https://i.ibb.co/8d9MCPz/th-luckyinlove.jpg'},

  { id: '18', name: 'New Dots', tags: ['polka dots', 'circles', 'dots'], colors: ['orange', 'red', 'green', 'yellow', 'white'], img: 'https://i.ibb.co/BLLjQNz/th-newdots.jpg'},

  { id: '19', name: 'Old Orchard', tags: ['fruit', 'apples', 'grapes', 'harvest', 'vine'], colors: ['brown', 'yellow', 'gold'], img: 'https://i.ibb.co/rZ0r2h1/th-oldorchard.jpg'},

  { id: '20', name: 'Old Town Blue', tags: ['flowers', 'vines', 'leaves', 'fan'], colors: ['blue', 'navy', 'white'], img: 'https://i.ibb.co/PrD25G1/th-oldtowne.jpg'},

  { id: '21', name: 'Pressed Flowers', tags: ['flowers', 'garden'], colors: ['black', 'yellow'], img: 'https://i.ibb.co/mbKf0CJ/th-decoratorflowers.jpg'},

  { id: '22', name: 'Rainbow Stripes', tags: ['stripes', 'bands', 'lines'], colors: ['blue', 'pink', 'yellow', 'brown', 'tan'], img: 'https://i.ibb.co/9TkzQtn/th-stripes2.jpg'},

  { id: '23', name: 'Rooster Black', tags: ['rooster', 'sun', 'sunflowers', 'chicken', 'flowers'], colors: ['black', 'white'], img: 'https://i.ibb.co/wKM0SJ0/th-roosterblack.jpg'},

  { id: '24', name: 'Sandalwood', tags: ['ivy', 'leaves', 'grapes', 'vines', 'berries'], colors: ['tan', 'brown', 'white'], img: 'https://i.ibb.co/jJnL2BR/th-sandalwood.jpg'},

  { id: '25', name: 'Scroll', tags: ['scroll', 'curl'], colors: ['turquoise', 'pink', 'gold', 'green', 'black', 'white', 'tan', 'brown'], img: 'https://i.ibb.co/6n3R17T/th-pinkscroll.jpg'},

  { id: '26', name: 'Shenandoah', tags: ['vine', 'flowers', 'leaves', 'garden'], colors: ['green', 'white', 'yellow'], img: 'https://i.ibb.co/Rc1jyLL/th-shenandoah.jpg'},

  { id: '27', name: 'Compass', tags: ['compass', 'cross', 'plus', 'starburst'], colors: ['black', 'white'], img: 'https://i.ibb.co/nP5D4qb/th-compass.jpg'},

  { id: '28', name: 'Snowflake Blue', tags: ['garland', 'snowflakes', 'garland', 'polka dots', 'dots', 'winter'], colors: ['blue', 'white'], img: 'https://i.ibb.co/j5KbLT7/th-snowflakeblue1.jpg'},

  { id: '29', name: 'Spring Blossom', tags: ['flowers', 'dots', 'leaves'], colors: ['green', 'white'], img: 'https://i.ibb.co/5FdswMQ/th-springblossom1.jpg'},

  { id: '30', name: 'Square Flowers', tags: ['square', 'flowers', 'clover'], colors: ['green', 'white', 'orange', 'yellow', 'tan'], img: 'https://i.ibb.co/XtJ7wBp/th-squareflowers.jpg'},

  { id: '31', name: 'Summer Impressions', tags: ['flowers', 'boquet', 'leaves'], colors: ['blue', 'green', 'red', 'orange', 'yellow'], img: 'https://i.ibb.co/R0P1QMJ/th-sunshine.jpg'},

  { id: '32', name: 'Terra', tags: ['lines', 'stripes', 'bands'], colors: ['brown', 'tan', 'gold'], img: 'https://i.ibb.co/0sqF5Ym/th-terra.jpg'},

  { id: '33', name: 'Terra Cotta Rose', tags: ['rose', 'flowers', 'leaves', 'branches'], colors: ['red', 'tan', 'brown', 'yellow'], img: 'https://i.ibb.co/19JSGHb/th-terracottarose.jpg'},

  { id: '34', name: 'Town and Country', tags: ['cross stitch', 'stars', 'plus', 'hex', 'embroidery'], colors: ['orange', 'yellow', 'brown', 'tan'], img: 'https://i.ibb.co/r227Vvk/th-townandcountry.jpg'},

  { id: '35', name: 'Verde', tags: ['olives', 'berries', 'leaves', 'branches'], colors: ['green', 'yellow', 'white', 'yellow'], img: 'https://i.ibb.co/HF311qv/th-verde.jpg'},

  { id: '36', name: 'Woodland', tags: ['flowers', 'leaves', 'forest'], colors: ['brown', 'white', 'tan'], img: 'https://i.ibb.co/9ZkLJL6/th-woodland.jpg'},

],
favorites: []
}
app.locals.data = data


app.get('/', (request, response) => {
  response.send('Pyrex!');
});

app.get('/api/v1/patterns', (request, response) => {
  const patterns = app.locals.data
  response.json({ patterns });
});

app.get('api/v1/favorites', (request, response) => {
  const favorites = app.locals.data.favorites
  console.log(favorites);
  response.json({ favorites })
});

app.get('/api/v1/patterns/:id', (request, response) => {
  const {id} = request.params;
  const onlyOne = app.locals.data.patterns.find(pattern => pattern.id === id);
  if (!onlyOne) {
    return response.sendStatus(404);
  }
  response.status(200).json(onlyOne);
});

app.post('/api/v1/patterns', (request, response) => {
  const pattern = request.body;
  for (let requiredParameter of ['id', 'name', 'img' ]) {
    if (!pattern[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { id: <String>, name: <String>, img:<String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }

  const { id, name, img } = pattern;
  app.locals.data.favorites.push({ id, name, img });
  response.status(201).json({ id, name, img });
});

app.delete('/api/v1/favorites', async (req, res) => {
  const { id } = req.body
    app.locals.data.favorites = app.locals.data.favorites.filter(favorite => parseInt(favorite.id) !== parseInt(id))
      res.status(202).json({ id })
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`);
});
