// MOCK DATA FOR TRANSFORMERS TESTS

export const data = {
  "adult": false,
  "backdrop_path": "/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg",
  "genre_ids": [
      10752
  ],
  "id": 1136318,
  "original_language": "en",
  "original_title": "Battle Over Britain",
  "overview": "A young pilot, fresh out of training, is called to join a Flight while they wait for the call to scramble.",
  "popularity": 646.548,
  "poster_path": "/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg",
  "release_date": "2023-12-01",
  "title": "Battle Over Britain",
  "video": false,
  "vote_average": 7.412,
  "vote_count": 51
}

export const data2 = {
  "adult": false,
  "backdrop_path": "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
  "genre_ids": [
      16,
      12,
      35
  ],
  "id": 1022789,
  "original_language": "en",
  "original_title": "Inside Out 2",
  "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust.",
  "popularity": 8445.266,
  "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  "release_date": "2024-06-11",
  "title": "Inside Out 2",
  "video": false,
  "vote_average": 7.907,
  "vote_count": 420
};

export const movieType = {
  id: 1136318,
  title: "Battle Over Britain",
  year: "2023",
  posterPath: "https://image.tmdb.org/t/p/w500/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg",
  genres: [ "War" ],
  overview: "A young pilot, fresh out of training, is called to join a Flight while they wait for the call to scramble."
}

export const movieType2 = {
  id: 1022789,
  title: "Inside Out 2",
  year: "2024",
  posterPath: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  genres: [ "Animation", "Adventure", "Comedy" ],
  overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust."
}

// id: wrong data type
export const incorrectDataType = {
  "adult": false,
  "backdrop_path": "/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg",
  "genre_ids": [
      10752
  ],
  "id": "1136318" as unknown as number,
  "original_language": "en",
  "original_title": "Battle Over Britain",
  "overview": "A young pilot, fresh out of training, is called to join a Flight while they wait for the call to scramble.",
  "popularity": 646.548,
  "poster_path": "/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg",
  "release_date": "2023-12-01",
  "title": "Battle Over Britain",
  "video": false,
  "vote_average": 7.412,
  "vote_count": 51
}

// missing "poster_path" property
export const missingPosterPath = {
  "adult": false,
  "backdrop_path": "/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg",
  "genre_ids": [
      10752
  ],
  "id": 1136318,
  "original_language": "en",
  "original_title": "Battle Over Britain",
  "overview": "A young pilot, fresh out of training, is called to join a Flight while they wait for the call to scramble.",
  "popularity": 646.548,
  "release_date": "2023-12-01",
  "title": "Battle Over Britain",
  "video": false,
  "vote_average": 7.412,
  "vote_count": 51
}

// missing "title" property
export const missingTitle = {
  "adult": false,
  "backdrop_path": "/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg",
  "genre_ids": [
      10752
  ],
  "id": 1136318,
  "original_language": "en",
  "original_title": "Battle Over Britain",
  "overview": "A young pilot, fresh out of training, is called to join a Flight while they wait for the call to scramble.",
  "popularity": 646.548,
  "poster_path": "/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg",
  "release_date": "2023-12-01",
  "video": false,
  "vote_average": 7.412,
  "vote_count": 51
}

// missing "video" property
export const missingVideo = {
  "adult": false,
  "backdrop_path": "/11G6N5zW0KykVS0EcNKeXHUmQj8.jpg",
  "genre_ids": [
      10752
  ],
  "id": 1136318,
  "original_language": "en",
  "original_title": "Battle Over Britain",
  "overview": "A young pilot, fresh out of training, is called to join a Flight while they wait for the call to scramble.",
  "popularity": 646.548,
  "poster_path": "/8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg",
  "release_date": "2023-12-01",
  "title": "Battle Over Britain",
  "vote_average": 7.412,
  "vote_count": 51
}


// MOCK DATA FOR APISERVICE TESTS

export const response = {
  "page": 1,
  "results": [
    {
        "adult": false,
        "backdrop_path": "/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
        "genre_ids": [
            16,
            10751,
            18,
            12,
            35
        ],
        "id": 1022789,
        "original_language": "en",
        "original_title": "Inside Out 2",
        "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
        "popularity": 8445.266,
        "poster_path": "/oxxqiyWrnM0XPnBtVe9TgYWnPxT.jpg",
        "release_date": "2024-06-11",
        "title": "Inside Out 2",
        "video": false,
        "vote_average": 7.907,
        "vote_count": 420
    },
    {
        "adult": false,
        "backdrop_path": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 653346,
        "original_language": "en",
        "original_title": "Kingdom of the Planet of the Apes",
        "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
        "popularity": 3069.128,
        "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        "release_date": "2024-05-08",
        "title": "Kingdom of the Planet of the Apes",
        "video": false,
        "vote_average": 6.879,
        "vote_count": 1150
    }
  ],
  "total_pages": 10,
  "total_results": 100
};

export const transformedData = [
  {
    "id": 1022789,
    "title": "Inside Out 2",
    "year": "2024",
    "posterPath": "https://image.tmdb.org/t/p/w500/oxxqiyWrnM0XPnBtVe9TgYWnPxT.jpg",
    "genreIds": [ 16, 10751, 18, 12, 35 ],
    "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone."
  },
  {
    "id": 653346,
    "title": "Kingdom of the Planet of the Apes",
    "year": "2024",
    "posterPath": "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    "genreIds": [ 878, 12, 28 ],
    "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike."
  }
]

export const transformedResults = {
  "metadata": {
    "pagination": {
      "currentPage": 1,
      "totalPages": 10
    }
  },
  "movies": [
    {
      "id": 1022789,
      "title": "Inside Out 2",
      "year": "2024",
      "posterPath": "https://image.tmdb.org/t/p/w500/oxxqiyWrnM0XPnBtVe9TgYWnPxT.jpg",
      "genreIds": [ 16, 10751, 18, 12, 35 ],
      "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone."
    },
    {
      "id": 653346,
      "title": "Kingdom of the Planet of the Apes",
      "year": "2024",
      "posterPath": "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
      "genreIds": [ 878, 12, 28 ],
      "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike."
    }
  ]
}

export const responsePage2 = {
  "page": 2,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
      "genre_ids": [
        878,
        28
      ],
      "id": 614933,
      "original_language": "en",
      "original_title": "Atlas",
      "overview": "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
      "popularity": 684.583,
      "poster_path": "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
      "release_date": "2024-05-23",
      "title": "Atlas",
      "video": false,
      "vote_average": 6.846,
      "vote_count": 925
    },
    {
      "adult": false,
      "backdrop_path": "/pPUSCLKQLSUCMVmku7tX4QrjCI8.jpg",
      "genre_ids": [
        16,
        28,
        12,
        35,
        10751
      ],
      "id": 1280768,
      "original_language": "en",
      "original_title": "No Time to Spy: A Loud House Movie",
      "overview": "Lincoln and the Louds are ecstatic to welcome their new Gran-Gran, Myrtle, into the family with a tropical wedding celebration.",
      "popularity": 664.53,
      "poster_path": "/mh4Mk95u7fdY4D4t5kRGQpQbVFy.jpg",
      "release_date": "2024-06-21",
      "title": "No Time to Spy: A Loud House Movie",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 12
    }
  ],
  "total_pages": 10,
  "total_results": 100
}

export const transformedResultsPage2 = {
  "metadata": {
    "pagination": {
      "currentPage": 2,
      "totalPages": 10
    }
  },
  "movies": [
    {
      "id": 614933,
      "title": "Atlas",
      "year": "2024",
      "posterPath": "https://image.tmdb.org/t/p/w500/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
      "genreIds": [ 878, 28 ],
      "overview": "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry."
    },
    {
      "id": 1280768,
      "title": "No Time to Spy: A Loud House Movie",
      "year": "2024",
      "posterPath": "https://image.tmdb.org/t/p/w500/mh4Mk95u7fdY4D4t5kRGQpQbVFy.jpg",
      "genreIds": [ 16, 28, 12, 35, 10751 ],
      "overview": "Lincoln and the Louds are ecstatic to welcome their new Gran-Gran, Myrtle, into the family with a tropical wedding celebration."
    }
  ]
}


// MOCK DATA FOR MOVIESERVICE

export const responseGenres = {
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 10752,
      "name": "War"
      }    
  ]
}

export const resultGenres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 10752,
    "name": "War"
    }  
]
