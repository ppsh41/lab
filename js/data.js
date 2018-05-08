const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];
let temp="";
let a=0;
let b=0;
for(a=0;a<countries.length;++a){
	temp+="<div class=\"item\"><h2>"+countries[a].name+"</h2><p>"+countries[a].continent+"</p><div class=\"inner-box\"><h3>Cities</h3>";
	for(b=0;b<countries[a].cities.length;++b) temp+="<p>"+countries[a].cities[b]+"</p>";
        temp+="</div><div class=\"inner-box\"><h3>Popular Photos</h3>";
	for(b=0;b<countries[a].photos.length;++b) temp+="<img src=\"./images/"+countries[a].photos[b]+"\"></img>";
	temp+="</div><button>Visit</button></div>";
}
document.getElementsByClassName("flex-container")[0].innerHTML=temp;