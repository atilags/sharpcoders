// Função Promise para login
const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("Erro no login!"));
    }

    // console.log("User logged!");
    resolve(email);
  });
};

// Função para pegar videos do usuario
const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
};

// Função para pegar detalhes do video
const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2500);
  });
};

// Função principal sendo chamada normalmente.
// loginUser("atila@gmail.com", "123456")
//   .then((user) => {
//     console.log({ user });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// Função chamando video.
// loginUser("atila@gmail.com", "123456")
//   .then((user) => {
//     return getUserVideos(user.email);
//   })
//   .then((videos) => {
//     console.log({ videos });
//     return getVideoDetails(videos[0]);
//   })
//   .then((details) => {
//     console.log({ details });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

const displayUser = async () => {
  try {
    const user = await loginUser("benita@benita.com", "123456");
    const videos = await getUserVideos(user.email);
    const details = await getVideoDetails(videos[0]);

    console.log({ user, videos, details });
  } catch (error) {
    console.log({ error });
  }
};

displayUser();