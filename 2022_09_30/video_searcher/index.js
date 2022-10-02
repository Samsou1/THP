const keywords = [];

let currentKeywords = [];

const keywordsCategories = [
    {
        name: 'Programmation',
        keywords: ['Javascript', 'Promises', 'React', 'Vue JS', 'Angular', 'ES6']
    },
    {
        name: 'Librairie',
        keywords: ['Lecture', 'Livres', 'Conseils librairie', 'Bibliothèque']
    },
    {
        name: 'Jeu vidéo',
        keywords: ['Switch', 'Game Boy', 'Nintendo', 'PS4', 'Gaming', 'DOOM', 'Animal Crossing']
    },
    {
        name: 'Vidéo',
        keywords: ['Streaming', 'Netflix', 'Twitch', 'Influenceur', 'Film']
    }
];

const allKeywords = keywordsCategories.reduce((prevKeywords, category) => [
    ...prevKeywords,
    ...category.keywords
], []);

// If the keyword is present in keywords to take into account and we toggle the checkbox, it means
// the checkbox is now unchecked, so we remove the keyword from keywords to take in account.
// Otherwise, it means that we added a new keyword, or we re-checked a checkbox. So we add the
// keyword in the keywords list to take in account.
const toggleKeyword = (keyword) => {
    if (currentKeywords.includes(keyword)) {
        currentKeywords = currentKeywords.filter((currentKeyword) => currentKeyword !== keyword);
    } else {
        currentKeywords.push(keyword);
    }
    reloadArticles();
};

// The first argument is the keyword's label, what will be visible by the user.
// It needs to handle uppercase, special characters, etc.
// The second argument is the value of the checkbox. To be sure to not have bugs, we generally
// put it in lowercase and without special characters.
const addNewKeyword = (label, keyword) => {
    resetInput();

    if (keywords.includes(keyword)) {
        console.warn("You already added this keyword. Nothing happens.");
        return;
    }

    if (!label || !keyword) {
        console.error("It seems you forgot to write the label or keyword in the addNewKeyword function");
        return;
    }

    keywords.push(keyword);
    currentKeywords.push(keyword);

    document.querySelector('.keywordsList').innerHTML += `
        <div>
            <input id="${label}" value="${keyword}" type="checkbox" checked onchange="toggleKeyword(this.value)">
            <label for="${label}">${label}</label>
        </div>
    `;

    reloadArticles();
    resetKeywordsUl();
};

// We reload the articles depends of the currentKeywords
// DONE : Modify this function to display only articles that contain at least one of the selected keywords.
const reloadArticles = () => {
    document.querySelector('.articlesList').innerHTML = '';
    var articlesToShow = []
    if(currentKeywords.length > 0){
        currentKeywords.map(function(keyword){
            if(!articlesToShow.includes(data.articles.filter(article => article.tags.includes(keyword))[0])){
                articlesToShow.push(data.articles.filter(article => article.tags.includes(keyword))[0]);
            }
        })
    }else{
        articlesToShow = data.articles
    }
    articlesToShow.forEach((article) => {
        document.querySelector('.articlesList').innerHTML += `
            <article>
                <h2>${article.titre}</h2>
            </article>
        `;
    });
};

// We empty the content from the <ul> under the text input
const resetKeywordsUl = () => {
    document.querySelector('.inputKeywordsHandle ul').innerHTML = '';
};

// We add a new article. The argument is an object with a title
const addNewArticle = (article) => {
    document.querySelector('.articlesList').innerHTML += `
        <article>
            <h2>${article.titre}</h2>
        </article>
    `;
};

// We empty the text input once the user submits the form
const resetInput = () => {
    document.querySelector("input[type='text']").value = "";
};

// Clean a keyword to lowercase and without special characters
// DONE: Make the cleaning
const cleanedKeyword = (keyword) => {
    const cleanedKeyword = keyword.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

    return cleanedKeyword;
};

// DONE: Modify this function to show the keyword containing a part of the word inserted
// into the form (starting autocompletion at 3 letters).
// DONE: We also show all the words from the same category than this word.
// DONE: We show in first the keyword containing a part of the word inserted.
// DONE: If a keyword is already in the list of presents hashtags (checkbox list), we don't show it.
const showKeywordsList = (value) => {
    resetKeywordsUl();
    // Starting at 3 letters inserted in the form, we do something
    if (value.length >= 3) {
        var keyword = allKeywords.filter(keyword => keyword.toLowerCase().startsWith(value.toLowerCase()))[0];
        if(keyword == undefined){
            keyword = allKeywords.filter(keyword => keyword.toLowerCase().includes(value.toLowerCase()))[0];
        }
        if(keyword != undefined){
            var otherKeyWords = keywordsCategories.filter(category => category.keywords.includes(keyword))[0].keywords;
        }
        if(keyword != undefined){
            const keyWordUl = document.querySelector(".inputKeywordsHandle ul");
            
            // This will allow you to add a new element in the list under the text input
            // On click, we add the keyword, like so:
            if(!currentKeywords.includes((keyword.toLowerCase()))){
                keyWordUl.innerHTML += `
                   <li onclick="addNewKeyword('${keyword}', '${cleanedKeyword(keyword)}')">${keyword}</li>
                `;
            };
            otherKeyWords.map(function(kword){
                if(kword != keyword && !currentKeywords.includes(kword.toLowerCase())){
                    keyWordUl.innerHTML += `
                   <li onclick="addNewKeyword('${kword}', '${cleanedKeyword(kword)}')">${kword}</li>
                `;
                }
            })
        }
    }
};

// Once the DOM (you will se what is it next week) is loaded, we get back our form and
// we prevent the initial behavior of the navigator: reload the page when it's submitted.
// Then we call the function addNewKeyword() with 2 arguments: the label value to show,
// and the checkbox value.
window.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.querySelector('input[type="text"]');

    document.querySelector('.addKeywordsForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const keywordInputValue = inputElement.value;
        addNewKeyword(keywordInputValue, cleanedKeyword(keywordInputValue));
    });

    inputElement.addEventListener('input', (event) => {
        const { value } = event.currentTarget;
        showKeywordsList(value);
    });

    data.articles.forEach((article) => {
        addNewArticle(article);
    });
});
