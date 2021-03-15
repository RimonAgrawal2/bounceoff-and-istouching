
  movingrec.x=mouseX;
  movingrec.y=mouseY;
  if(movingrec.x-fixedrec.x<fixedrec.width/2+movingrec.width/2&&fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2&&movingrec.y-fixedrec.y<fixedrec.width/2+movingrec.width/2&&fixedrec.y-movingrec.y<fixedrec.width/2+movingrec.width/2){
    movingrec.shapeColor="red";
    fixedrec.shapeColor="red";
  }
  else{
    movingrec.shapeColor="green";
    fixedrec.shapeColor="green";
  }