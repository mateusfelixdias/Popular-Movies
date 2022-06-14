import { connect } from "mongoose";

const createTableMoviesFavorites = async () => {
  try{
    const connectionSucess = await connect("mongodb://localhost:27017/moveisfavorites", {});

    if (!connectionSucess) {
      console.log("Não Foi Possivel Fazer a Conexão Com MongoDb.");
    };

    console.log("Conexão Feita Com Sucesso!");

  }catch(error){
    console.log(error);
  };
};

export default createTableMoviesFavorites();