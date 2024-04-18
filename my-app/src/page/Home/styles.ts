import styled from "styled-components";

export const Container = styled.div`

.header {
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header h1 {
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
}

.header span {
  font-family: "Inter";
  font-weight: 300;
  color: rgb(12, 130, 189);
}
.header-left {
  display: flex;
  gap: 12px;
}

.header-left button {
  font-family: "Inter";
  font-weight: 300;
  font-size: 25px;
  color: rgb(16, 124, 170);
}

.header-left img {
  margin-top: 5px;

  width: 30px;
  height: 30px;
}

.searchBar {
  gap: 70px;
  display: flex;
  justify-content:center;
  align-items: center;
  height: 30vh;
}

.searchBar img {
  width: 30px;
  height: 30px;
}

.searchBar input {
  width: 20%;
  height: 15%;
}
.searchBar button {
  font-family: "Inter";
  font-weight: 200;
  font-size: 20px;
  color: aliceblue;
  border-radius: 8px;
  background-color: rgb(8, 165, 208);
}

.list-products {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}


.products {
  border-radius: 8px;
  background-color: rgb(114, 182, 195);
  width: 360px;
  height: 400px;
}

.products-1 {
  gap: 15px;
  display: flex;

}

.products-2 {
  margin-top: 20px;
  gap: 15px;
  display: flex;
}

.descript img {
border-radius: 5px;
width: 60%;
height: 60%;  
}


`