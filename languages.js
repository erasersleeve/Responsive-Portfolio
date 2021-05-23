const textObj = {
    "fr":{
        title:"Lucile Développeuse Web",
        shortDescription: "Développeuse Web MERN stack autodidacte depuis 2020, avec de l'expérience professionnelle en analyse de données, basée à <span>Montréal</span>. Je porte une attention particulière à la maintenabilité ainsi que l'expérience utilisateur lorsque je crée des applications webs.",
        button: "Contactez-moi",
        longDescription: "Mon intérêt pour le développement web a commencé en 2019, lorsque, dans le cadre de mes fonctions, j'ai été amenée à trouver une solution pour automatiser un renommage massif de fichiers photos avec Python et lorsque les requêtes SQL n'avaient plus de secrets pour moi. De ce fait, ce qui me plaisait le plus à titre de Business Operations Analyst était l'aspect analyse de données où il fallait trouver ce petit détail qui ferait la différence pour résoudre un problème technique. Après m'être auto-formée sur les compétences techniques grâce aux innombrables ressources en ligne, j'ai tout de même décidé de m'inscrire au Coding Bootcamp de l'Université de Toronto afin de parfaire ces compétences nouvellement acquises ainsi que d'acquérir des compétences en collabaration projet (méthode agile). Le bootcamp se termine fin juillet 2020.",
        technologiesList:"Voici les technologies avec lesquelles j'ai travaillé:",
        builtBy:"Développé par <a href='https://github.com/luluvann'>Lucile</a>",
        designedBy:"Design par <a href='https://github.com/bchiang7/v4'>Britanny Chiang</a>"
    }
}


$(".fr").on("click","span",function(){
    $("#title").text(textObj["fr"].title)
})