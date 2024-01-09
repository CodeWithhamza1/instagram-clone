class Card {
    constructor(data) {
        this.data = data;
        this.isLiked = JSON.parse(localStorage.getItem(`card-${this.data.cardId}`)) || false;
    }

    toggleHeart() {
        this.isLiked = !this.isLiked;
        localStorage.setItem(`card-${this.data.cardId}`, JSON.stringify(this.isLiked));
        this.updateHeart();
    }

    updateHeart() {
        const heartIcon = document.getElementById(`heart-${this.data.cardId}`);
        heartIcon.classList.toggle('filled', this.isLiked);
    }

    formatTime() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(this.data.time).toLocaleDateString(undefined, options);
    }

    render() {
        const cardContainer = document.getElementById("cardContainer");

        const mainCard = document.createElement("div");
        mainCard.classList.add("mainCard");

        mainCard.innerHTML = `
                <div class="proinfo">
                    <div class="profileImg img">
                        <img src="${this.data.profileImgSrc}" alt="">
                    </div>
                    <div class="profileName">
                        <p>${this.data.profileName} <span class="dark">• ${this.formatTime()}</span></p>
                    </div>
                </div>
                <div class="postImage">
                    <img src="${this.data.postImgSrc}" alt="">
                </div>
                <div class="postIcons">
                    <div class="firstIcons">
                        <svg onclick="cards[${this.data.cardId}].toggleHeart()" xmlns="http://www.w3.org/2000/svg" aria-label="Like" class="heart" id="heart-${this.data.cardId}"
                            height="24" role="img" viewBox="0 0 24 24" width="24">
                            <title>Like</title>
                            <path
                                d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
                            </path>
                        </svg>
                        <img src="svg/comment.svg" alt="">
                        <img src="svg/share.svg" alt="">
                    </div>
                    <div class="secIcons">
                        <img src="svg/saved.svg" alt="">
                    </div>
                </div>
                <div class="description">
                    ${this.data.description}
                </div>
            `;

        cardContainer.appendChild(mainCard);
        this.updateHeart();
    }
}

// Data for the cards
const cardData = [
    {
        profileImgSrc: "img/stat8.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "img/stat8.jpg",
        cardId: 0,
        description: "Alhamdullilah!! Kaar e Kamal CA Chapter commemorated its first anniversary by organizing a heartfelt celebration at an...more",
    },
    // Add more card data as needed
    {
        profileImgSrc: "img/stat5.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "img/stat7.jpg",
        cardId: 1,
        description: "❤️❤️ tag your friends follow @pakistani.tweets @pakistani.tweets @pakistani.tweets for more",
    },

    {
        profileImgSrc: "img/stat2.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww",
        cardId: 2,
        description: "Meri muhabbat tera husn nahin, kirdar hai...more",
    },

    {
        profileImgSrc: "img/stat1.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
        cardId: 3,
        description: "🚀 Prompt Advance: 10x your speed with @prompt.advance...more",
    },

    {
        profileImgSrc: "img/stat5.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://i.redd.it/ow448xml45v51.jpg",
        cardId: 4,
        description: "Ik umer tak may uski zaroorat bana raha...more",
    },

    {
        profileImgSrc: "img/stat4.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://img.freepik.com/free-photo/bright-3d-heart-shape_23-2150965442.jpg",
        cardId: 5,
        description: "Happy Makar Sankranti 🎉🎊🥳plz follow me... more",
    },

    {
        profileImgSrc: "img/stat3.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://whatson.ae/wp-content/uploads/2023/04/pics-of-the-week-feature.gif",
        cardId: 6,
        description: "Kabhi kabhi dosti me bhi dil lag jata hai..!! Jaroori nahi ki pyaar krne wala hi aapki care Karta ho kuch dost bhi...more",
    },

    {
        profileImgSrc: "img/stat1.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://static.boredpanda.com/blog/wp-content/uploads/2016/11/before-and-after-photoshop-pics-90-581b2e9ab164d__700.jpg",
        cardId: 7,
        description: "You can’t finish if you don’t start.",
    },

    {
        profileImgSrc: "img/stat2.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://shortpixel.com/blog/wp-content/uploads/2023/12/mario_uncompressed.gif",
        cardId: 8,
        description: "4 Highest Paying Job Portals for Freshers 🎓... more",
    },

    {
        profileImgSrc: "img/stat5.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif",
        cardId: 9,
        description: "Insha Allah ❤️❤️",
    },

    {
        profileImgSrc: "img/stat5.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://www.icegif.com/wp-content/uploads/cool-wallpapers-icegif-1.gif",
        cardId: 10,
        description: "جو لوگ دنیا میں نیک اعمال کرتے ہیں آخرت میں اچھا صلہ پاتے ہیں۔... more",
    },

    {
        profileImgSrc: "img/stat7.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://cdn2.hubspot.net/hubfs/53/00-Blog-Related_Images/Excited_GIF.gif",
        cardId: 11,
        description: "Don’t let fear dictate your decisions. This is a new year, take control of your life.",
    },

    {
        profileImgSrc: "img/stat4.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://static.demilked.com/wp-content/uploads/2020/09/5f5f2bf241ad9-real-life-old-photos-then-now-coverimage.jpg",
        cardId: 12,
        description: "2007 wali hai koi ? 💗👊...more",
    },

    {
        profileImgSrc: "img/stat8.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://i0.wp.com/www.trenddpz.com/wp-content/uploads/2023/03/Kaba-sharifKhanakaba.jpg?resize=707%2C866&ssl=1",
        cardId: 13,
        description: "‏سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلَا إِلَهَ إِلَّا اللَّهُ ، وَاللَّهُ أَكْبَرُ.",
    },

    {
        profileImgSrc: "img/stat3.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://sm.mashable.com/t/mashable_me/photo/default/33-16_qtsp.1248.jpg",
        cardId: 14,
        description: "Walk along the cliffs - Grindelwald First Cliff Walk❄️",
    },

    {
        profileImgSrc: "img/stat2.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://pxbar.com/wp-content/uploads/2023/09/single-boys-pics.jpg",
        cardId: 15,
        description: "So much peace 🌾🌿🌳🏡...more",
    },

    {
        profileImgSrc: "img/stat1.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://i.pinimg.com/236x/34/f3/fe/34f3feb82fac889211034368abc03021.jpg",
        cardId: 16,
        description: "Grow your Insta Fast 👀",
    },

    {
        profileImgSrc: "img/stat4.jpg",
        profileName: "maharhamza",
        time: "2022-01-05T12:34:56", // Sample time in ISO format
        postImgSrc: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        cardId: 17,
        description: "Oh Allah, grant us the good in this world and the good in the hereafter and save us from the torment of hell fire. I ask... ",
    },
];






// Create instances of Card class for each item in the cardData array
const cards = cardData.map(data => new Card(data));

// Render each card
cards.forEach(card => card.render());





document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        console.log("Content fully loaded!");
        document.getElementById("preloader").style.display = "none";
        document.body.style.overflow = "visible";
    }, 2000);
});






// Get all elements with the class 'videoTrigger'
const videoTriggers = document.querySelectorAll('.videoTrigger');

// Add click event listener to each videoTrigger element
videoTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        const videoUrl = this.getAttribute('data-video-url');
        document.getElementById('videoPopup').style.display = 'block';
        document.getElementById('videoPlayer').src = videoUrl;
    });
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('videoPopup').style.display = 'none';
    document.getElementById('videoPlayer').src = '';
});









function modifyNames() {
    let elements = document.getElementsByClassName('name');

    for (let i = 0; i < elements.length; i++) {
        let currentName = elements[i].textContent;

        if (currentName.length > 7) {
            elements[i].textContent = currentName.substring(0, 7) + '..';
        }
    }
}
modifyNames()














function scrollContent(amount) {
    var content = document.getElementById('content');
    content.scrollTop += amount;
}














function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block" || menu.style.display === "") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close the menu if the user clicks outside of it
window.onclick = function (event) {
    var menu = document.getElementById("menu");
    if (event.target.closest('#main-menu') === null && event.target !== menu) {
        menu.style.display = "none";
    }
}
