module.exports = function check(str, bracketsConfig) {
  let strTest = '';
  let strLenght;
  let fl = true;

  function findPare(sBracket){     //find pare for bracket
    let lBracket;
        for (j=0; j<bracketsConfig.length; j++){
            if (sBracket==bracketsConfig[j][0]){
                lBracket=bracketsConfig[j][1]
                j=bracketsConfig.length;
                }
        }
        return(lBracket);           
    }

    function filterBrackets(currentStr){
        let filterStr = '';
        for(i=0; i<currentStr.length;i++){
            if ((currentStr[i+1]==undefined) || (findPare(currentStr[i])!=currentStr[i+1])){
                filterStr=filterStr + currentStr[i];
            }
            else{
                i++;
            }
        }
        return(filterStr);
    }

    for (i=0;i<str.length;i++){
      if(str[i]!=' '){strTest=strTest+str[i];}
    }
    strLenght = strTest.length;
    while(fl==true){
        strTest=filterBrackets(strTest);
        if (strLenght!=strTest.length){strLenght=strTest.length;}
        else{fl=false;}
    };

  if (strLenght==0) {return(true);}
  else{return(false);}         

}
