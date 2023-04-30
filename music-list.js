// Music List
const music_list =[
    {
        img: "images/image-1.jpeg",
        name: "Bones",
        artist: "Imagine_Dragons",
        music: "Audio/Bones_Imagine_Dragons.mp3"
      },
      {
        img: "images/image-2.jpeg",
        name: "Attention",
        artist: "Charlie Puth",
        music: "Audio/Attention - Charlie Puth .mp3"
      },
      {
        img: "images/image-3.jpeg",
        name: "Kabhi_Jo_Badal_Barse",
        artist: "JalRaj__Arijit_Singh",
        music: "Audio/Kabhi_Jo_Badal_Barse_JalRaj__Arijit_Singh.mp3"
      },
      {
        img: "images/image-4.jpeg",
        name: "Ei_Obelay",
        artist: "Sheikh_Ishtiaque",
        music: "Audio/Ei_Obelay__Sheikh_Ishtiaque.m4a"
      },
      {
        img: "images/image-5.jpg",
        name: "Myself",
        artist: "Bazzi",
        music: "Audio/Myself_Bazzi.m4a"
      },
      {
        img: "images/image-6.jpg",
        name: "Chorabali",
        artist: "Shitom_Ahmed",
        music: "Audio/Chorabali_Shitom_Ahmed.m4a"
      }
];


let back_btn = document.querySelector('.back-btn');
let menu_btn = document.querySelector('.menu-btn');
let wrapper = document.querySelector('.wrapper');

let d_none = false;

const menuSection = document.querySelector(".menuSection");

music_list.forEach((music) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const name = document.createElement("h4");
  name.textContent = music.name;
  menuItem.appendChild(name);

  const artist = document.createElement("p");
  artist.textContent = music.artist;
  menuItem.appendChild(artist);

  menuSection.appendChild(menuItem);
});

menu_btn.addEventListener('click',function(){
  if(d_none == false){
    d_none = true;
    menuSection.classList.remove('d-none');
    wrapper.classList.add('top-10px');
  }else{
    d_none = false;
    menuSection.classList.add('d-none');
  }
})