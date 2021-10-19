let movies = {
    rentList: [],
    admin: true,
    moviesDB: [
        {
            id: 1,
            title: "Passion of Christ",
            duration: "2 hours",
            description: "...tells the story of Jesus Christ's life on earth; his death and resurrection.",
        }, {
            id: 2,
            title: "Hidden Figures",
            duration: "2 hours",
            description: "...tells the story three women mathematicians who challenged the hurdles in their lives to change history.",
        }, {
            id: 3,
            title: "Anaestia",
            duration: "1 hour, 30 minutes",
            description: "...tells a story of a lost and forgotten princess whom fate never forgot.",
        }
    ],
    addMovie: function (title, dur, desc) {
        if (this.admin) {
            movies.moviesDB.push({
                id: movies.moviesDB.length + 1,
                title: title,
                duration: dur,
                description: desc,
            });
            console.log('Movie added Succesfully');
            this.readMovieList();
        } else {
            console.error('Get Permission from admin');
        }
    },
    readMovieList: function (id) {
        JSON.stringify(movies.moviesDB[id]);
        movies.moviesDB.forEach((data, index) => {
            return console.log(`${index + 1}. MovieTitle: ${data.title}
            MovieDuration: ${data.duration}
            MovieDescription: ${data.description}`);
        });
    },
    updateMovie: function (oldM, newM) {
        if (this.admin) {
            let updateIndex = movies.moviesDB.findIndex((movie) => {
                return movie.title === oldM;
            });
            movies.moviesDB[updateIndex].title = newM;
            this.readMovieList();
        } else {
            console.error('Get Permission from admin');
        }
    },
    deleteMovie: function (title) {
        if (this.admin) {
            let deleteIndex = movies.moviesDB.findIndex((movies) => {
                return movies.title === title;
            });
            movies.moviesDB.splice(deleteIndex, 1);
            this.readMovieList();
        } else {
            console.error('Get Permission from admin');
        }
    },
    rentMovie: function (title) {
        let searchIndex = movies.moviesDB.findIndex((movie) => {
            return movie.title === title;
        });
        console.log(movies.moviesDB[searchIndex]);
        movies.rentList.push(movies.moviesDB[searchIndex]);
        console.log(movies.rentList);
    },

};

movies.rentMovie('Passion of Christ');
movies.rentMovie('Anaestia');

