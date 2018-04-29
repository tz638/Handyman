import Professions from './Professions.js';

export default class Users {

	constructor()	{

		this.users=this.produceRandomResults()
	}

	produceRandomResults = () => {

    var names = ['Tarik', 'Jovan', 'Fred', 'Prasant', 'Enes'],
        ratings = [1, 2, 3, 4, 5],
        distances = [0.6, 2.3, 1.4, 3.1, 2.2],
        prices= [10, 20, 30, 40, 50],
        results = [];

    var arrays = [names, ratings, distances, prices];    
    for (var i=0; i<100; i++) {

      var result = [];
      for (var j=0; j<4; j++)  {

        var random = 5*Math.random();
        result.push(arrays[j][Math.floor(random)]);
      }
      var entry = {'name': result[0], 
                  'rating': result[1], 
                  'distance': result[2], 
                  'price': result[3], 
                  'professions': this.produceRandomProfessions()};
      results.push(entry);
    }
    return results;
  }

  produceRandomProfessions = () => {

    var possibleProfessions = Object.keys(Professions);
    var currentProfessions=[];
    for (var i=0; i<3; i++)  {

      var profession = possibleProfessions[Math.floor(possibleProfessions.length*Math.random())]
      var put = (i==0) ? 1 : Math.round(Math.random());
      if (put==1 && !currentProfessions.includes(profession))
        currentProfessions.push(profession)
    }
    return currentProfessions;
  }

  getAllByProfession = (profession) => {

  	return this.users.filter((user) => {return user.professions.includes(profession)});
  }

  getAllByName = (name) => {

  	return this.users.filter((user) => {return user.name.includes(name)});
  }
}