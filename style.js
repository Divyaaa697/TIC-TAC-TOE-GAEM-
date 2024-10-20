*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family:Verdana, Geneva, Tahoma, sans-serif;  
  color: white;
}
body{
  background-color: #7C00FE;
  text-align: center;
}
h1{
  margin-top: 1.5em;
  font-size: 2.5em;
}

.container{
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 3em; */
}
.game{
  height: 65vmin;
  width: 60vmin;
  border: 5px solid #FFAF00;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 1em;
}
.box{
  height: 16vmin;
  width: 16vmin;
  background-color: #F9E400;
  border: none;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3) ;
  font-weight: 600;
  font-size: 4em;
  border-radius: 5px;
  color: #353132;
}

#reset-btn{
  padding: 0.5em;
  font-size: 1.3em;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #353132;
  color: white;
}

.msg-container p{
  font-size: 2em;
  font-weight: 600;
  margin-top: 0.5em;
  color: #ffffff;
}
.hide{
  visibility: hidden;
}
