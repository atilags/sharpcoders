// Exemplo 1
const loginUser1 = (email, password, callback) => {
  setTimeout(() => {
    console.log("User logged!");
    callback(email);
  }, 1500);
};

const user1 = loginUser1("atila@gmail.com", "123456", (user) => {
  console.log(user);
});

// Exemplo 2
const loginUser2 = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = true;

    if (error) {
      onError(new Error("Wrong credentials"));
      return;
    }

    console.log("User logged!");
    onSuccess(email);
  }, 1500);
};

const user2 = loginUser2(
  "atila@gmail.com",
  "123456",
  (user) => {
    console.log(user);
  },
  (error) => {
    console.log(error);
  }
);


// Exemplo 3
const loginUser3 = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      onError(new Error("Wrong credentials"));
      return;
    }

    console.log("User logged!");
    onSuccess(email);
  }, 1500);
};

// Função para pegar videos do usuario
const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
};

// Função para pegar detalhes do video
const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback("title of the video");
  }, 2500);
};

// Variavel chamando pela função desejada.
const userPromise = loginUser3(
  "atila@gmail.com",
  "123456",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log(videos);
      getVideoDetails(videos[0], (title) => {
        console.log(title);
      });
    });
  },
  (error) => {
    console.log(error);
  }
);
