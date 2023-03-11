function moviemaker(title,year,genre,topActor,rating,art) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.topActor = topActor;
    this.raing = rating;
    this.art = art;
    
}
// all the movies into objects
// Action
var inception = new moviemaker("inception",2010,"Action","Leonardo DiCaprio","8.8/10","/images/Action/inception.jpg");
var starWarsTheEmpireStrikesBack = new moviemaker("Star Wars: The Empire Strikes Back",1980,"Action","Mark Hamill","8.7/10","/images/Action/starWars:EpisodeV-TheEmpireStrikesBack.jpg");
var theDarkKnight = new moviemaker("The Dark Knight",2008,"Action","Christian Bale","9.0/10","/images/Action/theDarkKnight.jpg");
var theLordOfTheRingsTheReturnOfTheKing = new moviemaker("The Lord of the Rings: The Return of the King",2003,"Action","Elijah Wood","9.0/10","/images/Action/theLordOfTheRings:TheReturnOfTheKing.jpg");
var theMatrix = new moviemaker("The Matrix",1999,"Action","Keanu Reeves","8.7/10","/images/Action/theMatrix.jpg");
// Adventure
var aliens = new moviemaker("Aliens",1986,"Adventure","Sigourney Weaver","8.4/10","/images/Adventure/aliens.jpg");
var coco = new moviemaker("Coco",2017,"Adventure","Anthony Gonzalez","8.4/10","/images/Adventure/coco.jpg");
var indianaJonesTheRaidersOfTheLostArk = new moviemaker("Indiana Jones and the Raiders of the Lost Ark",1981,"Adventure","Harrison Ford","8.4/10","/images/Adventure/indianaJonesAndTheRaidersOfTheLostArk.jpg");
var spiderManIntroTheSpiderVerse = new moviemaker("Spider-Man: Into the Spider-Verse",2018,"Adventure","Shameik Moore","8.4/10","/images/Adventure/spider-man:IntoTheSpider-Verse.jpg");
var wallE = new moviemaker("WALL-E",2008,"Adventure","Ben Burtt","8.3/10","/images/Adventure/wall-e.jpg");
// Comedy
var horribleBosses = new moviemaker("Horrible Bosses",2011,"Comedy","Jason Bateman","6.9/10","/images/Comedy/horribleBosses.jpg");
var stepBrothers = new moviemaker("Step Brothers",2008,"Comedy","Will Ferrell","6.9/10","/images/Comedy/stepBrothers.jpg");
var theHangover = new moviemaker("The Hangover",2009,"Comedy","Bradley Cooper","7.7/10","/images/Comedy/theHangover.jpg");
var theHotChick = new moviemaker("The Hot Chick",2002,"Comedy","Rob Schneider","5.5/10","/images/Comedy/theHotChick.jpg");
var whiteChicks = new moviemaker("White Chicks",2004,"Comedy","Marlon Wayans","5.7/10","/images/Comedy/whiteChicks.jpg");
// Drama
var babylon = new moviemaker("Babylon A.D.",2008,"Drama","Vin Diesel","5.5/10","/images/Drama/babylon.jpg");
var blackPanther = new moviemaker("Black Panther",2018,"Drama","Chadwick Boseman","7.3/10","/images/Drama/blackPanther:WakandaForever.jpg");
var magicMikeLastDance = new moviemaker("Magic Mike's Last Dance",2023,"Drama","Channing Tatum","5.4/10","/images/Drama/magicMike'SLastDance.jpg");
var theBansheesOfInsherin = new moviemaker("The Banshees of Insherin",2022,"Drama","Colin Farrell","7.8/10","/images/Drama/theBansheesOfInisherin.jpg");
var whiteNoise = new moviemaker("White Noise",2022,"Drama","Adam Driver","5.7/10","/images/Drama/whiteNoise.jpg");
// Fantasy
var avatarTheWayOfWater = new moviemaker("Avatar: The Way of Water",2022,"Fantasy","Zoe Saldana","7.8/10","/images/Fantasy/avatar:TheWayOfWater.jpg");
var everythingEverywhere = new moviemaker("Everything, Everywhere All at Once",2022,"Fantasy","Tom Holland","8.0/10","/images/Fantasy/everythingEverywhereAllAtOnce.jpg");
var pussInBootsTheLastWish = new moviemaker("Puss in Boots: The Last Wish",2022,"Fantasy","Antonio Banderas","7.9/10","/images/Fantasy/pussInBoots:TheLastWish.jpg");
var theFlash = new moviemaker("The Flash",2014,"Fantasy","Grant Gustin","7.5/10","i/mages/Fantasy/theFlash.jpg");
var theLittleMermiad = new moviemaker("The Little Mermaid",1989,"Fantasy","Jodi Benson","7.6/10","/images/Fantasy/theLittleMermaid.jpg");
// Horror
var paranormalActivity = new moviemaker("Paranormal Activity",2007,"Horror","Katie Featherston","6.3/10","/images/Horror/paranormalActivity.jpg");
var rec = new moviemaker("REC",2007,"Horror","Manuela Velasco","7.4/10","/images/Horror/rec.jpg");
var shutter = new moviemaker("Shutter",2008,"Horror","Joshua Jackson","5.2/10","/images/Horror/shutter.jpg");
var theExorcist = new moviemaker("The Exorcist",1973,"Horror","Ellen Burstyn","8.1/10","/images/Horror/theExorcist.jpg");
var theFourthKind = new moviemaker("The Fourth Kind",2009,"Horror","Milla Jovovich","5.9/10","/images/Horror/theFourthKind.jpg");
// Musical
var hedwigAndTheAngryInch = new moviemaker("Hedwig and the Angry Inch",2001,"Musical","John Cameron Mitchell","7.7/10","/images/Musical/hedwigAndTheAngryInch.jpg");
var laLaLand = new moviemaker("La La Land",2016,"Musical","Ryan Gosling","8.0/10","/images/Musical/laLaLand.jpg");
var moulinRouge = new moviemaker("Moulin Rouge!",2001,"Musical","Nicole Kidman","7.6/10","/images/Musical/moulinRouge!.jpg");
var purpleRain = new moviemaker("Purple Rain",1984,"Musical","Prince","6.5/10","/images/Musical/purpleRain.jpg");
var southPark = new moviemaker("South Park: Bigger, Longer & Uncut",1999,"Musical","Trey Parker","7.7/10","/images/Musical/southPark:Bigger,Longer&Uncut.jpg");
// Mystery
var antMan = new moviemaker("Ant-Man and the Wasp: Quantumania",2023,"Mystery","Paul Rudd","6.5/10","/images/Mystery/ant-manAndTheWasp:Quantumania.jpg");
var fastX = new moviemaker("Fast X",2023,"Mystery","Vin Diesel","Not out yet","/images/Mystery/fastX.jpg");
var infinityPool = new moviemaker("Infinity Pool",2023,"Mystery","Alexander Skarsgård","6.1/10","/images/Mystery/infinityPool.jpg");
var knivesOut = new moviemaker("Knives Out",2019,"Mystery","Daniel Craig","7.9/10","images/Mystery/knivesOut.jpg");
var knockAtTheCabin = new moviemaker("Knock at the Cabin",2023,"Mystery","Dave Bautista","6.1/10","/images/Mystery/knockAtTheCabin.jpg");
// Sci - Fi 
var bladeRunner = new moviemaker("Blade Runner",1982,"Sci-Fi","Harrison Ford","8.1/10","/images/Sci-fi/bladeRunner.jpg");
var starWarsTheEmpireStrikesBackSCI = new moviemaker("Star Wars: The Empire Strikes Back",1980,"Sci-Fi","Mark Hamill","8.7/10","/images/Sci-fi/starWars:EpisodeV-TheEmpireStrikesBack.jpg");
var starWarsAnewHope = new moviemaker("Star Wars: A New Hope",1977,"Sci-Fi","Mark Hamill","8.6/10","/images/Sci-fi/starWars:EpisodeIv-ANewHope.jpg");
var starWarsReturnOfTheJedi = new moviemaker("Star Wars: Return of the Jedi",1983,"Sci-Fi","Mark Hamill","8.3/10","/images/Sci-fi/starWars:EpisodeVi-ReturnOfTheJedi.jpg");
var theMatrixSCI = new moviemaker("The Matrix",1999,"Sci-Fi","Keanu Reeves","8.7/10","/images/Sci-fi/theMatrix.jpg");
// Thriller
var chinaTown = new moviemaker("China Town",1974,"Thriller","Jack Nicholson","8.2/10","/images/Thriller/chinatown.jpg");
var drive = new moviemaker("Drive",2011,"Thriller","Ryan Gosling","7.8/10","/images/Thriller/drive.jpg");
var eyesWideShut = new moviemaker("Eyes Wide Shut",1999,"Thriller","Tom Cruise","7.5/10","/images/Thriller/eyesWideShut.jpg");
var spellBound = new moviemaker("Spellbound",1945,"Thriller","Ingrid Bergman","7.5/10","/images/Thriller/spellbound.jpg");
var zodiac = new moviemaker("Zodiac",2007,"Thriller","Jake Gyllenhaal","7.7/10","/images/Thriller/zodiac.jpg");

var all_movies = [whiteChicks,theHotChick,stepBrothers,theHangover,horribleBosses,wallE,spiderManIntroTheSpiderVerse,indianaJonesTheRaidersOfTheLostArk,coco,aliens,theMatrix,theLordOfTheRingsTheReturnOfTheKing,theDarkKnight,starWarsTheEmpireStrikesBack,inception,babylon,blackPanther,magicMikeLastDance,theBansheesOfInsherin,whiteNoise,avatarTheWayOfWater,everythingEverywhere,pussInBootsTheLastWish,theFlash,theLittleMermiad,paranormalActivity,rec,shutter,theExorcist,theFourthKind,hedwigAndTheAngryInch,laLaLand,moulinRouge,purpleRain,southPark,antMan,fastX,infinityPool,knivesOut,knockAtTheCabin,bladeRunner,starWarsAnewHope,starWarsReturnOfTheJedi,chinaTown,drive,eyesWideShut,spellBound,zodiac];
var genres = ["action", "horror", "comedy", "sci-fi", "thriller", "drama", "fantasy", "adventure", "mystery", "musical"]
function searchEngine(searchValue) {
var searchResult = all_movies.filter(function(movie){
    return movie.genre.toLowerCase() == searchValue.toLowerCase();
});
console.log(searchResult);
for (let i = 0; i < searchResult.length; i++) {
  document.getElementById("image"+i).src = searchResult[i].art;
}
}
