function moviemaker(title,year,genre,topActor,rating) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.topActor = topActor;
    this.raing = rating;
    
}
// all the movies into objects
// Action
var inception = new moviemaker("inception",2010,"Action","Leonardo DiCaprio","8.8/10");
var starWarsTheEmpireStrikesBack = new moviemaker("Star Wars: The Empire Strikes Back",1980,"Action","Mark Hamill","8.7/10");
var theDarkKnight = new moviemaker("The Dark Knight",2008,"Action","Christian Bale","9.0/10");
var theLordOfTheRingsTheReturnOfTheKing = new moviemaker("The Lord of the Rings: The Return of the King",2003,"Action","Elijah Wood","9.0/10");
var theMatrix = new moviemaker("The Matrix",1999,"Action","Keanu Reeves","8.7/10");
// Adventure
var aliens = new moviemaker("Aliens",1986,"Adventure","Sigourney Weaver","8.4/10");
var coco = new moviemaker("Coco",2017,"Adventure","Anthony Gonzalez","8.4/10");
var indianaJonesTheRaidersOfTheLostArk = new moviemaker("Indiana Jones and the Raiders of the Lost Ark",1981,"Adventure","Harrison Ford","8.4/10");
var spiderManIntroTheSpiderVerse = new moviemaker("Spider-Man: Into the Spider-Verse",2018,"Adventure","Shameik Moore","8.4/10");
var wallE = new moviemaker("WALL-E",2008,"Adventure","Ben Burtt","8.3/10");
// Comedy
var horribleBosses = new moviemaker("Horrible Bosses",2011,"Comedy","Jason Bateman","6.9/10");
var stepBrothers = new moviemaker("Step Brothers",2008,"Comedy","Will Ferrell","6.9/10");
var theHangover = new moviemaker("The Hangover",2009,"Comedy","Bradley Cooper","7.7/10");
var theHotChick = new moviemaker("The Hot Chick",2002,"Comedy","Rob Schneider","5.5/10");
var whiteChicks = new moviemaker("White Chicks",2004,"Comedy","Marlon Wayans","5.7/10");
// Drama
var babylon = new moviemaker("Babylon A.D.",2008,"Drama","Vin Diesel","5.5/10");
var blackPanther = new moviemaker("Black Panther",2018,"Drama","Chadwick Boseman","7.3/10");
var magicMikeLastDance = new moviemaker("Magic Mike's Last Dance",2023,"Drama","Channing Tatum","5.4/10");
var theBansheesOfInsherin = new moviemaker("The Banshees of Insherin",2022,"Drama","Colin Farrell","7.8/10");
var whiteNoise = new moviemaker("White Noise",2022,"Drama","Adam Driver","5.7/10");
// Fantasy
var avatarTheWayOfWater = new moviemaker("Avatar: The Way of Water",2022,"Fantasy","Zoe Saldana","7.8/10");
var everythingEverywhere = new moviemaker("Everything, Everywhere All at Once",2022,"Fantasy","Tom Holland","8.0/10");
var pussInBootsTheLastWish = new moviemaker("Puss in Boots: The Last Wish",2022,"Fantasy","Antonio Banderas","7.9/10");
var theFlash = new moviemaker("The Flash",2014,"Fantasy","Grant Gustin","7.5/10");
var theLittleMermiad = new moviemaker("The Little Mermaid",1989,"Fantasy","Jodi Benson","7.6/10");
// Horror
var paranormalActivity = new moviemaker("Paranormal Activity",2007,"Horror","Katie Featherston","6.3/10");
var rec = new moviemaker("REC",2007,"Horror","Manuela Velasco","7.4/10");
var shutter = new moviemaker("Shutter",2008,"Horror","Joshua Jackson","5.2/10");
var theExorcist = new moviemaker("The Exorcist",1973,"Horror","Ellen Burstyn","8.1/10");
var theFourthKind = new moviemaker("The Fourth Kind",2009,"Horror","Milla Jovovich","5.9/10");
// Musical
var hedwigAndTheAngryInch = new moviemaker("Hedwig and the Angry Inch",2001,"Musical","John Cameron Mitchell","7.7/10");
var laLaLand = new moviemaker("La La Land",2016,"Musical","Ryan Gosling","8.0/10");