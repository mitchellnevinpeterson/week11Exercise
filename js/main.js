// var firstSong =	{
// 		name: "Spoken Word",
// 		artist: "Chase & Status",
// 		length: 3.23,
// 		plays: 4,
// 		albumArt: "img/spokenWord.jpg",
// 		listeningTime: function() {
// 			return this.length * this.plays
// 		}
// 	}
// var secondSong = {
// 		name: "C.H.I.C.",
// 		artist: "Andy Duguid",
// 		length: 3.50,
// 		plays: 6,
// 		albumArt: "img/CHIC.jpg"
// 		listeningTime: function() {
// 			return this.length * this.plays
// 		}
// 	}
// var thirdSong = {
// 		name: "Get What You Give",
// 		artist: "Felix Cartal",
// 		length: 3.39,
// 		plays: 8,
// 		albumArt: "img/getWhatYouGive.jpg"
// 		listeningTime: function() {
// 			return this.length * this.plays
// 		}
// 	}


function newSong(name, artist, length, plays, albumArt, listeningTime) {
	this.name = name
	this.artist = artist
	this.length = length
	this.plays = plays
	this.albumArt = albumArt
	this.listeningTime = function() {
		return this.length * this.plays
	}
	
}


var firstSong = new newSong("Spoken Word", "Chase & Status", 3.23, 4, "img/spokenWord.jpg")
var secondSong = new newSong("C.H.I.C.", "Andy Duguid", 3.50, 6, "img/CHIC.jpg")
var thirdSong = new newSong("Get What You Give", "Felix Cartal", 3.39, 8, "img/getWhatYouGive.jpg")


var music = []
music.push(firstSong, secondSong, thirdSong)

for (var i = 0; i < music.length; i++) {
	// creating the elments to hold the data in the objects
	var newDiv = document.createElement("div")
	var nameH5 = document.createElement("h5")
	var artistH6 = document.createElement("h6")
	var lengthH6 = document.createElement("h6")
	var playsH6 = document.createElement("h6")
	var albumArtImg = document.createElement("img")
	var listeningTimeH6 = document.createElement("h6")
	// creating the text nodes to put into the elements created above
	var txtName = document.createTextNode(music[i].name)
	var txtArtist = document.createTextNode("Artist: " + music[i].artist)
	var txtLength = document.createTextNode("Length: " + music[i].length)
	var txtPlays = document.createTextNode("Plays: " + music[i].plays)
	var txtAlbumArt = music[i].albumArt
	var txtListeingTime = document.createTextNode("Listening Time: " + music[i].listeningTime())
	// Putting the text nodes into the elements created using appendChild
	body.className = "text-center"
	nameH5.appendChild(txtName)
	artistH6.appendChild(txtArtist)
	lengthH6.appendChild(txtLength)
	playsH6.appendChild(txtPlays)
	albumArtImg.src = txtAlbumArt
	listeningTimeH6.appendChild(txtListeingTime)
	albumArtImg.className = "img-responsive"
	// inserting the elements made above into the html
	body.appendChild(newDiv)
	body.appendChild(nameH5)
	body.appendChild(artistH6)
	body.appendChild(lengthH6)
	body.appendChild(playsH6)
	body.appendChild(albumArtImg)
	body.appendChild(listeningTimeH6)

}


console.log(music)