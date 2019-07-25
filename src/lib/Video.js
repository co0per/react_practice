export class Video {
    constructor(id, title, description, img, date, owner) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.img = img;
      this.date = date;
      this.owner = owner;
    }
  
    get_date() {
      let yymmdd = this.date.split("-");

      //month
      const mlist = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      yymmdd[1] = mlist[parseInt(yymmdd[1])];

      //day
      yymmdd[2] = yymmdd[2].substring(0, 2);

      if(yymmdd[2].substring(0, 1) === "0"){
        yymmdd[2] = yymmdd[2].substring(1, 2);

        switch(yymmdd[2]) {
          case "1" :
            yymmdd[2] = "1st";
            break;
          case "2" :
            yymmdd[2] = "2nd";
            break;
          case "3" :
            yymmdd[2] = "3rd";
            break;
          default :
            yymmdd[2] = yymmdd[2] + "th";
            break;
        }
      } else {
        yymmdd[2] = yymmdd[2] + "th"
      }

      return `${yymmdd[0]} ${yymmdd[1]} ${yymmdd[2]}`;
    }
}





/*


switch(yymmdd[1]) {
  case "01" :
      yymmdd[1] = "January";
    break;
  case "02":
      yymmdd[1] = "February";
    break;
  case "03":
      yymmdd[1] = "March";
    break;
  case "04":
      yymmdd[1] = "April";
    break;
  case "05":
      yymmdd[1] = "January";
    break;
  case "06":
      yymmdd[1] = "January";
    break;
  case "07":
      yymmdd[1] = "January";
    break;
  case "08":
      yymmdd[1] = "January";
    break;
  case "09":
      yymmdd[1] = "January";
    break;
  case "10":
      yymmdd[1] = "January";
    break;
  case "11":
      yymmdd[1] = "January";
    break;
  case "12":
      yymmdd[1] = "January";
    break;
  default:
      console.log("nop");
}*/