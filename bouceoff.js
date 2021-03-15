if(movingrec.x-fixedrec.x<fixedrec.width/2+movingrec.width/2&&fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2){
    movingrec.velocityX=movingrec.velocityX*(-1);
    fixedrec.velocityX=fixedrec.velocityX*(-1);
  } 
  if(movingrec.y-fixedrec.y<fixedrec.height/2+movingrec.height/2&&fixedrec.y-movingrec.y<fixedrec.height/2+movingrec.height/2){
    movingrec.velocityY=movingrec.velocityY*(-1);
    fixedrec.velocityY=fixedrec.velocityY*(-1);
  }