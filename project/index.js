const keywords = [];
let currentKeywords = [];
let proposedKeywords = [];
const keywordsCategories = [
    {
        "keywords": ["Javascript", "Promises", "React", "Vue JS", "Angular", "ES6"]
    },
    {
        "keywords": ["Lecture", "Livres", "Conseils librairie", "Bibliothèque"]
    },
    {
        "keywords": ["Switch", "Game Boy", "Nintendo", "PS4", "Gaming", "DOOM", "Animal Crossing"]
    },
    {
        "keywords": ["Streaming", "Netflix", "Twitch", "Influenceur", "Film"]
    }
];

const allKeywords = [];

keywordsCategories.forEach((categorie) => {
   categorie.keywords.forEach((keyword) => {
       allKeywords.push(keyword);
   });
})

// If the keyword is present in keywords to take into account and we toggle the checkbox, it signify the checkbox is now unchecked, so we remove the keyword
// from ekywords to take in account.
// Else, it signify that we add a new keyword or we re-checked a checkbox. So we add the keyword in the keyword list to take in account.
const toggleKeyword = (keyword) => {
    if (currentKeywords.includes(keyword)) {
        currentKeywords = currentKeywords.filter(currentKeyword => currentKeyword != keyword);
    } else {
        currentKeywords.push(keyword);
    }

    reloadArticles();
}

// The first argument is the keyword's label, what will be visible by the user. It need to contain uppercase, special characters etc...
// The second argument is the value of the checkbox. To be sure to not have bugs, we generally put it in lowercase and without special characters.
const addNewKeyword = (label, keyword) => {
    resetInput();

    if (keywords.includes(keyword)) {
        console.warn("You already add this keyword. Nothing happens.");
        return;
    } else if (label == null && keyword == null) {
        console.error("It seems you forgot to write the label or the keyword in a function addNewKeyword");
        return;
    } else {
        keywords.push(keyword);
        currentKeywords.push(keyword);
    }

    document.querySelector(".keywordsList").innerHTML += `
        <div>
            <input id="${label}" value="${keyword}" type="checkbox" checked onchange="toggleKeyword(this.value)">
            <label for="${label}">${label}</label>
        </div>
    `;

    reloadArticles();
    resetKeywordsUl();
}

// We add a new article
// The arg is an object with a title
const addNewArticle = (article) => {
    document.querySelector(".articlesList").innerHTML += `
        <article>
            <h2>${article.titre}</h2>
        </article>
    `;
}

// We empty the text input once the user submit the form
const resetInput = () => {
    document.querySelector("input[type='text']").value = "";
}

// We empty the content from the UL under the text input
const resetKeywordsUl = () => {
    document.querySelector(".inputKeywordsHandle ul").innerHTML = '';
}

const cleanedKeyword = (keyword) => {
    let cleanedKeyword = keyword.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    return cleanedKeyword;
}

// We reload the articles depends of the currentKeywords
// TODO : Modify this function to return the articles containing at least one of the selected keywords.
const reloadArticles = () => {
    document.querySelector(".articlesList").innerHTML = ""
    let articlesToShow = data.articles;

    articlesToShow.forEach(article => {
        document.querySelector(".articlesList").innerHTML += `
            <article>
                <h2>${article.titre}</h2>
            </article>
        `;
    });
}

// TODO : Modify this function to show the keyword containging a part of the word inserted into the form (starting autocompletion at 3 letters)
// TODO : We also show all the words from the same category than this word.
// TODO : We show in first the keyword containing a part of the word inserted.
// TODO : If a keyword is already in the liste of presents hashtags (checkbox list), we don't show it
const showKeywordsList = (value) => {
    // Starting at 3 letters inserted in the forme, we start to do something
    if (value.length >= 3) {
        const keyWordUl = document.querySelector(".inputKeywordsHandle ul");
        resetKeywordsUl();
        
        // This will allow you to add a new element in the list under the text input
        // On clic, we add the keyword
        // keyWordUl.innerHTML += `
        //    <li onclick="addNewKeyword('${keyword}', '${cleanedKeyword(keyword)}')">${keyword}</li>
        // `;
    }
}

// Once DOM (you will se what it is last week) is loaded, we get back our form and we prevent the initial comportment from the navigator : reload the page when it is submitted. Then we call the function
// addNewKeyword with 2 arguments :  The label value to show and then the checkbox value.
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".addKeywordsForm").addEventListener('submit', (event) => {
        event.preventDefault();
        const keywordInputValue = document.querySelector("input[type='text']").value;
        addNewKeyword(keywordInputValue, cleanedKeyword(keywordInputValue));
    })

    document.querySelector("input[type='text']").addEventListener('input', function() {
        showKeywordsList(this.value);
    })

    data.articles.forEach((article) => {
        addNewArticle(article);
    })
})