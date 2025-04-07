var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv =document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv =document.createElement("div");
     

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = "Benefits";

        var benefitslist = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitslist.appendChild(listItem);
        });
        
        //adding the elements form the first created to the last one 
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitslist);
        
        articlesDiv.appendChild(articleDiv);
    })   ;
}
//If this method is missing the previous line of codes will not function because .onload waits for the response
xhr.send();

xhr1 = new XMLHttpRequest();
var url2 ="./Smartphones.json";
xhr1.open('GET', url2, true);
xhr1.responseType = 'json';

//What to Do with the incoming data
xhr1.onload = function() {
    var Smartphones = xhr1.response.Smartphones;
    var SmartphonesDiv = document.getElementById('Smartphones');
    //iterating over the data in the json file
    Smartphones.forEach(function(Smartphone) {
       var company = document.createElement('h2');
       company.textContent = Smartphone.Company;
        SmartphonesDiv.appendChild(company);
        var ul = document.createElement('ul');  
        var li1 = document.createElement('li');
        li1.textContent = Smartphone.Name;
        ul.appendChild(li1);
        var li2 = document.createElement('li');
        li2.textContent = Smartphone.Screen;
        ul.appendChild(li2);
        var li3 = document.createElement('li');
        li3.textContent = Smartphone.Processor;
        ul.appendChild(li3);
        var li4 = document.createElement('li');
        li4.textContent = Smartphone.OperatingSystem;
        ul.appendChild(li4);
        var li5 = document.createElement('li');
        li5.textContent = Smartphone.BatterySize;
        ul.appendChild(li5);   
        var li6 = document.createElement('li');
        li6.textContent = Smartphone.Storage;
        ul.appendChild(li6);
        var li7 = document.createElement('li');
        li7.textContent = Smartphone.Price;
        ul.appendChild(li7);
        SmartphonesDiv.appendChild(ul);
    });
};
xhr1.onerror = function(){
    console.error("Failed to load smartphones json file.")
};
xhr1.send();